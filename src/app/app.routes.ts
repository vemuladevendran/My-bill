import { Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./create-acount/create-acount.page').then(
        (m) => m.CreateAcountPage
      ),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },

  {
    path: 'items',
    loadComponent: () => import('./items/items.page').then((m) => m.ItemsPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'current-order',
    loadComponent: () =>
      import('./current-order/current-order.page').then(
        (m) => m.CurrentOrderPage
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-items',
    loadComponent: () =>
      import('./add-items/add-items.page').then((m) => m.AddItemsPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'barcode-scanner',
    loadComponent: () =>
      import('./barcode-scanner/barcode-scanner.page').then(
        (m) => m.BarcodeScannerPage
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'items-list',
    loadComponent: () =>
      import('./items-list/items-list.page').then((m) => m.ItemsListPage),
    canActivate: [AuthGuard],
  },
];
