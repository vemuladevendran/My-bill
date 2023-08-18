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
  {
    path: 'barcode-scanner',
    loadComponent: () => import('./barcode-scanner/barcode-scanner.page').then( m => m.BarcodeScannerPage)
  },
  {
    path: 'items-list',
    loadComponent: () => import('./items-list/items-list.page').then( m => m.ItemsListPage)
  },
];
