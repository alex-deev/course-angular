import { Component, inject, signal } from '@angular/core';
import { List } from '../components/list/list';
import { GifService } from '../services/gif-service';
import { Gif } from '../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [List],
  template: `
    <h2 class="text-2xl font-bold mt-5">Buscar GIF</h2>
    <h3 class="text-sm text-gray-500">Busca GIFs por nombre, descripción y más</h3>

    <section>
      <input
        type="text"
        placeholder="Burcar GIFs"
        class="mt-3 border border-grey-300 rounded-md p-2"
        (keyup.enter)="onSearch(txtSearch.value)"
        #txtSearch
      />
    </section>

    <section class="grid">
      <gifs-list [gifs]="[]" />
    </section>
  `,
})
export default class SearchPage {
  gifService = inject(GifService);

  onSearch(text: string) {
    this.gifService.searchGifs(text);
  }
}
