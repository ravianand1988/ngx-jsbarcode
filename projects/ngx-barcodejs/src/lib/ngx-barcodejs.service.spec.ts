import { TestBed } from '@angular/core/testing';

import { NgxBarcodeJsService } from './ngx-barcodejs.service';

describe('NgxBarcodeJsService', () => {
  let service: NgxBarcodeJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBarcodeJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
