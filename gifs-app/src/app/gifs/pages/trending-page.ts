import { Component } from '@angular/core';
import { List } from "../components/list/list";

@Component({
  selector: 'app-trending-page',
  imports: [List],
  template: `
    <section class="py-5">
      <gifs-list />
    </section>
  `,
  styles: ``,
})
export default class TrendingPage {}
