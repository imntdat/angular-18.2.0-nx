import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModules } from '@so/shared';

@Component({
  selector: 'app-add-edit-invoice',
  standalone: true,
  templateUrl: './add-edit-invoice.component.html',
  imports: [...SharedModules],
})
export class AddEditInvoiceComponent {
  invoiceId: number | null = null;
  isEdit = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const invoiceId = params.get('id');
      this.invoiceId = invoiceId ? +invoiceId : null;
      this.isEdit = !!this.invoiceId;
    });
  }
}
