import { Component, input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'gifs-list',
  imports: [Item],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      @for (url of gifs(); track $index) {
        <gifs-list-item [imgUrl]="url" />
      }

    </div>
  `,
})
export class List {
  gifs = input.required<string[]>();
}
