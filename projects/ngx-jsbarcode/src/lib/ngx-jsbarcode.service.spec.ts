import { TestBed } from '@angular/core/testing';

import { NgxJsbarcodeService } from './ngx-jsbarcode.service';

describe('NgxJsbarcodeService', () => {
  let service: NgxJsbarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJsbarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
