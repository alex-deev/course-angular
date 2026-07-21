import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '@environments/environment';
import type { GifphyResponse } from '../interfaces/gifphy.interfaces';

@Service()
export class GifService {
  private http = inject(HttpClient);

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
        console.log({ res });
      });
  }
}
