import { Route } from '@angular/router';

export const invoicesRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../views/invoice-list/invoice-list.component').then(
        (c) => c.InvoiceListComponent
      ),
    children: [
      {
        path: 'add',
        loadComponent: () =>
          import('../views/add-edit-invoice/add-edit-invoice.component').then(
            (c) => c.AddEditInvoiceComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('../views/add-edit-invoice/add-edit-invoice.component').then(
            (c) => c.AddEditInvoiceComponent
          ),
      },
    ],
  },
];
