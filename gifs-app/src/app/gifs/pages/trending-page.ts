import { Component, inject, signal } from '@angular/core';
import { List } from '../components/list/list';
import { GifService } from '../services/gif-service';

@Component({
  selector: 'app-trending-page',
  template: `
    <section class="py-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        @for (group of gifService.trendingGroups(); track $index) {
          <div class="grid gap-4">
            @for (gif of group; track gif.id) {
              <div>
                <img class="h-full w-full rounded object-cover" [src]="gif.url" [alt]="gif.title" />
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export default class TrendingPage {
  gifService = inject(GifService);
}
