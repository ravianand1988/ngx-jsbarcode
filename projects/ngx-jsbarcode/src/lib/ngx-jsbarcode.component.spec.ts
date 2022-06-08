import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsbarcodeComponent } from './ngx-jsbarcode.component';

describe('NgxJsbarcodeComponent', () => {
  let component: NgxJsbarcodeComponent;
  let fixture: ComponentFixture<NgxJsbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJsbarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
