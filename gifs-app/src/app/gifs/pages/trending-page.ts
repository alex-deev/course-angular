import { Component, inject, signal } from '@angular/core';
import { List } from '../components/list/list';
import { GifService } from '../services/gif-service';

@Component({
  selector: 'app-trending-page',
  imports: [List],
  template: `
    <section class="py-5">
      <gifs-list [gifs]="gifService.trendingGifs()" />
    </section>
  `,
})
export default class TrendingPage {
  gifService = inject(GifService);
}
