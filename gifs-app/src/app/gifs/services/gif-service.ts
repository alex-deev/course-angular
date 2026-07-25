import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Service, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GifphyResponse } from '../interfaces/gifphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Service()
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendIsLoading = signal(false);
  private trendPage = signal(0);

  trendingGroups = computed(() => {
    const arr = this.trendingGifs();
    return Array.from({ length: Math.ceil(arr.length / 3) }, (_, i) => arr.slice(i * 3, i * 3 + 3));
  });

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
    this.loadHistoryFromStorage();
  }

  loadTrendingGifs() {
    if (this.trendIsLoading()) return;
    this.trendIsLoading.set(true);

    this.http
      .get<GifphyResponse>(`${environment.gifphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.gifphyApiKey,
          limit: 18,
          offset: this.trendPage() * 20,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGifphyItemsToGifArray(res.data);
        this.trendingGifs.update((current) => [...current, ...gifs]);
        this.trendPage.update((page) => page + 1);
        this.trendIsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GifphyResponse>(`${environment.gifphyUrl}/gifs/search`, {
        params: {
          api_key: environment.gifphyApiKey,
          limit: 15,
          q: query,
        },
      })
      .pipe(
        map((res) => GifMapper.mapGifphyItemsToGifArray(res.data)),
        tap((gifs) =>
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLocaleLowerCase()]: gifs,
          })),
        ),
        tap(() => this.saveHistoryOnStorage()),
      );
  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }

  loadHistoryFromStorage() {
    try {
      const rawHistory = localStorage.getItem('gifs-history') ?? '{}';
      const history = JSON.parse(rawHistory);
      this.searchHistory.set(history);
    } catch {
      this.searchHistory.set({});
    }
  }

  saveHistoryOnStorage() {
    localStorage.setItem('gifs-history', JSON.stringify(this.searchHistory()));
  }
}
