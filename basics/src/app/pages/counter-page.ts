import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  template: `
    <div class="mt-6 p-4">
      <h1 class="text-2xl font-bold self-start">Counter</h1>
      <hr class="my-3 border-t border-gray-300 w-full" />

      <div class="flex flex-col items-center gap-2">
        <strong>{{ counterSignal() }}</strong>
        <button class="bg-slate-300 rounded w-25" (click)="increaseBy(+1)">+1</button>
        <button class="bg-slate-300 rounded w-25" (click)="increaseBy(-1)">-1</button>
        <button class="bg-slate-300 rounded w-25" (click)="resetCounter()">Reset</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
