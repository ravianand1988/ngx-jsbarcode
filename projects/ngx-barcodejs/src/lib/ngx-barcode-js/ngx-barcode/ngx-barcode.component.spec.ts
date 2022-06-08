import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBarcodeComponent } from './ngx-barcode.component';

describe('NgxBarcodeComponent', () => {
  let component: NgxBarcodeComponent;
  let fixture: ComponentFixture<NgxBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
