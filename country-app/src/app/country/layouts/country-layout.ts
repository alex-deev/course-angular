import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `
    <p>Country Layout</p>

    <section class="p-5 bg-red-300">
      <router-outlet />
    </section>

    <p>Footer</p>
  `,
  imports: [RouterOutlet],
})
export class CountryLayout {}
