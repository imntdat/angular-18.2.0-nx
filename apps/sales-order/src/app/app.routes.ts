import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../views/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('@so/invoices').then((invoices) => invoices.invoicesRoutes),
  },
];
