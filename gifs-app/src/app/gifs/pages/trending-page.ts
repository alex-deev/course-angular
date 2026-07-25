import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { List } from '../components/list/list';
import { GifService } from '../services/gif-service';

@Component({
  selector: 'app-trending-page',
  template: `
    <section>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 bg-red-500 h-dvh overflow-y-scroll"
        (scroll)="onScroll($event)"
        #scrollDiv
      >
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

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('scrollDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
