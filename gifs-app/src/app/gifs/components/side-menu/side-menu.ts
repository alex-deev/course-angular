import { Component } from '@angular/core';
import { SideMenuHeader } from './side-menu-header';
import { SideMenuOptions } from './side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  template: `
    <div
      id="menu"
      class="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
    >
      <gifs-side-menu-header />
      <gifs-side-menu-options />
    </div>
  `,
})
export class SideMenu {}
