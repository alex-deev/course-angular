import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page')
    },
    {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page')
    },
    {
        path: 'search',
        loadComponent: () => import('./gifs/pages/trending-page')
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
