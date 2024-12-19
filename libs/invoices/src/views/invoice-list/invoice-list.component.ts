import { Component } from '@angular/core';
import { SharedModules } from '@so/shared';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  templateUrl: './invoice-list.component.html',
  imports: [...SharedModules],
})
export class InvoiceListComponent {}
