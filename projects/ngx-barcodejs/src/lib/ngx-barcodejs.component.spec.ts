import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxBarcodeJsComponent } from './ngx-barcodejs.component';

describe('NgxBarcodeJsComponent', () => {
  let component: NgxBarcodeJsComponent;
  let fixture: ComponentFixture<NgxBarcodeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxBarcodeJsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBarcodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
