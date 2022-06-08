import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeComponent } from './ngx-barcode/ngx-barcode.component';

@NgModule({
  declarations: [NgxBarcodeComponent],
  imports: [CommonModule],
  exports: [NgxBarcodeComponent],
})
export class NgxBarcodeJsModule {}
