import { Component, input } from '@angular/core';
import { Item } from './item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [Item],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      @for (gif of gifs(); track gif.id) {
        <gifs-list-item [imgUrl]="gif.url" />
      } @empty {
        <p>No se han podido recuperar los GIFs!</p>
      }
    </div>
  `,
})
export class List {
  gifs = input.required<Gif[]>();
}
