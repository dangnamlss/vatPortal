import { Component, Inject, inject, OnDestroy, OnInit, PLATFORM_ID, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgbDatepickerModule, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { convertUnixToNgbDateStruct, getUnixTimestamp } from '../../functions/dateConvert';

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
  imports: [FormsModule, CommonModule, NgbDatepickerModule],
  templateUrl: './vat-info.component.html',
  styleUrl: './vat-info.component.scss',
})
export class VatInfoComponent implements OnInit, OnDestroy{
  private modalService = inject(NgbModal);

  isSmallScreen: boolean = false;

  selectedRowId: number = -1;
  vatInfo: VatInfo = new VatInfo();
  selectedInvoice: InvoiceInfo = new InvoiceInfo();
  listInvoices: InvoiceInfo[] = [
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: 'huyendt',
      include_vat: false,
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: 'huyendt',
      include_vat: true,
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: 'huyendt',
      include_vat: false,
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: 'huyendt',
      include_vat: true,
    },
    {
      reservation_id: 4220260,
      total: 92000,
      created_at: 1721816404,
      created_by: 'huyendt',
      include_vat: false,
    },
  ];

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;
  reservationId!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  ngOnDestroy(): void {
    if(isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 992;
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.isSmallScreen = window.innerWidth < 992;
  }

  submitVatInfo = () => {
    console.log(this.vatInfo);
  };

  selectInvoice = (invoice: InvoiceInfo, index: number) => {
    this.selectedRowId = index;
    this.selectedInvoice = {
      reservation_id: invoice.reservation_id,
      total: invoice.total,
      created_at: invoice.created_at,
      created_by: invoice.created_by,
      include_vat: invoice.include_vat,
    };
  };

  searchInvoice = () => {
    console.log(getUnixTimestamp(this.fromDate));
    console.log(getUnixTimestamp(this.toDate));
    console.log(this.reservationId);
    console.log(convertUnixToNgbDateStruct(getUnixTimestamp(this.fromDate)));
    console.log(convertUnixToNgbDateStruct(getUnixTimestamp(this.toDate)));
  };

  openFormModal = (content: TemplateRef<any>) => {
    this.modalService.open(content, { fullscreen: true });
  };

  handleSelectRow = (
    invoice: InvoiceInfo,
    index: number,
    content: TemplateRef<any>
  ) => {
    this.selectInvoice(invoice, index);

    if(this.isSmallScreen) {
      this.openFormModal(content);
    }
  };
}
