import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav class="flex justify-center h-10 items-center gap-10 bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        @for (link of links; track $index) {
          <a [routerLink]="link" routerLinkActive="font-bold">{{ linkToTitle(link) }}</a>
        }
      </nav>
    </header>

    <router-outlet />
  `,
})
export class App {
  links = [
    '/counter',
    '/hero',
    '/dragonball',
    '/dragonball-super'
  ]

  linkToTitle(link: string) {
    return link.charAt(1).toUpperCase() + link.replace('-', ' ').slice(2);
  }
}
