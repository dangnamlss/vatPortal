import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
class VatInfo {
  company_name: string;
  address: string;
  vat_no: string;
  email: string;
  constructor() {
    this.company_name = '';
    this.address = '';
    this.vat_no = '';
    this.email = '';
  }
}

class InvoiceInfo {
  reservation_id: number = 0;
  total: number = 0;
  created_at: number = 0;
  created_by: string = "";
  include_vat: boolean = false;
}

@Component({
  selector: 'app-vat-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vat-info.component.html',
  styleUrl: './vat-info.component.scss',
})
export class VatInfoComponent {
  vatInfo: VatInfo = new VatInfo();
  selectedInvoice: InvoiceInfo = new InvoiceInfo();
  listInvoices: InvoiceInfo[] = [
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: "huyendt",
      include_vat: false
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: "huyendt",
      include_vat: true
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: "huyendt",
      include_vat: false
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: "huyendt",
      include_vat: true
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: "huyendt",
      include_vat: false
    }
  ];

  submitVatInfo = () => {
    console.log(this.vatInfo);
  };

  selectInvoice = (invoice: InvoiceInfo) => {
    this.selectedInvoice = {
      reservation_id: invoice.reservation_id,
      total: invoice.total,
      created_at: invoice.created_at,
      created_by: invoice.created_by,
      include_vat: invoice.include_vat
    };
  }
}
