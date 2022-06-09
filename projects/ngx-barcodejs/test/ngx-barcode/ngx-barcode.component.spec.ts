import { Component, Input } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { NgxBarcodeComponent } from 'ngx-barcodejs';

describe('NgxBarcodeComponent', () => {
  @Component({})
  class HostComponent {
    @Input() barcodeValue = 'foo';
  }

  let spectator: SpectatorHost<NgxBarcodeComponent, HostComponent>;
  let component: NgxBarcodeComponent;

  const factory = createHostFactory({
    component: NgxBarcodeComponent,
    host: HostComponent,
  });

  beforeEach(() => {
    const HOST_TEMPLATE = `
      <ngx-barcode [barcodeValue]="barcodeValue"></ngx-barcode>
    `;
    spectator = factory(HOST_TEMPLATE);
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays the barcode as svg with value set from the host component', () => {
    expect('ngx-barcode').toExist();
    expect('.ngx-barcode-svg-foo').toExist();
  });

  it('sets the barcode when the new value is given', () => {
    spectator.setHostInput({ barcodeValue: 'bar' });
    expect('.ngx-barcode-svg-bar').toExist();
  });
});
