import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <nav class="flex justify-center gap-10 bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        <a routerLink="/hero" class="">Hero</a>
        <a routerLink="/dragonball">Dragonball</a>
        <a routerLink="/dragonball-super">Dragonball Super</a>
      </nav>
    </header>

    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('basics');
}
