import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    loadComponent: () => import('./items/items.page').then( m => m.ItemsPage)
  },
  {
    path: 'current-order',
    loadComponent: () => import('./current-order/current-order.page').then( m => m.CurrentOrderPage)
  },
  {
    path: 'add-items',
    loadComponent: () => import('./add-items/add-items.page').then( m => m.AddItemsPage)
  },
];
