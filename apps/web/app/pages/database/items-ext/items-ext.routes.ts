import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./items-ext-page.component').then((m) => m.ItemsExtPageComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('../items/item-detail-page.component').then((it) => it.ItemDetailPageComponent),
      },
    ],
  },
]