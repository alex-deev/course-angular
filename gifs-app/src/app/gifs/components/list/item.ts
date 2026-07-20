import { Component } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  template: `
    <div>
      <img
        class="h-auto max-w-full rounded-base"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        alt=""
      />
    </div>
  `,
  styles: ``,
})
export class Item {}
