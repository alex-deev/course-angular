import { Routes } from '@angular/router';
import { HeroPage } from './pages/hero-page';
import { DragonballPage } from './pages/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page';
import { CounterPage } from './pages/counter-page';

export const routes: Routes = [
  {
    path: '',
    component: HeroPage,
  },
  {
    path: 'counter',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
  },
];
