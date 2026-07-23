import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../services/gif-service';
import { List } from '../components/list/list';

@Component({
  selector: 'app-history-page',
  imports: [List],
  template: `
    <h3 class="text-lg font-bold py-5">Mostrando: {{ query() }}</h3>
    <div>
      <gifs-list [gifs]="gifsByKey()" />
    </div>
  `,
})
export default class HistoryPage {
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
