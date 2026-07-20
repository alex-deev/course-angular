import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../components/side-menu/side-menu";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenu],
  template: `
    <div
      class="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white"
    >
      <div class="flex flex-col relative w-screen">
        
        <gifs-side-menu />

        <div class="ml-64 px-4 flex flex-col flex-1 h-full text-slate-800">
          <router-outlet />
        </div>

      </div>
    </div>
  `,
  styles: ``,
})
export default class DashboardPage {}
