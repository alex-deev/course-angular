import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  template: `
    <main class="m-auto flex grow flex-col min-h-screen">
      <router-outlet />

      <div class="flex-1 grow"></div>
      <app-footer />
    </main>
  `,
})
export class App {
  protected readonly title = signal('country-app');
}
