import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatInfoComponent } from './vat-info.component';

describe('VatInfoComponent', () => {
  let component: VatInfoComponent;
  let fixture: ComponentFixture<VatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
