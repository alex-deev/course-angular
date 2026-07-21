import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GifphyResponse } from '../interfaces/gifphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Service()
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GifphyResponse>(`${environment.gifphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.gifphyApiKey,
          limit: 15,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGifphyItemsToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingLoading.set(false);

        console.log(gifs);
      });
  }
}
