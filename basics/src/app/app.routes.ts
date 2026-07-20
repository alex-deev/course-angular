import { Routes } from '@angular/router';
import { Hero } from './pages/hero';
import { Dragonball } from './pages/dragonball';
import { DragonballSuper } from './pages/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: Hero,
  },
  {
    path: 'hero',
    component: Hero,
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper
  }
];
