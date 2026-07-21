import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  template: `
    <div>
      <img class="h-auto max-w-full rounded object-cover" [src]="imgUrl()" alt="" />
    </div>
  `,
})
export class Item {
  imgUrl = input.required<string>();
}
