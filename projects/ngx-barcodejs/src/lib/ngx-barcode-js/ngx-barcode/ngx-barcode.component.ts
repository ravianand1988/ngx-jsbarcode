import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import * as jsBarcode from 'jsbarcode';
import { BarcodeFormat, BarcodeOptions } from './barcode-config';

@Component({
  selector: 'ngx-barcode',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBarcodeComponent {
  @Input()
  get barcodeValue(): string {
    return this._barcodeValue;
  }
  set barcodeValue(_value: string) {
    if (_value && _value !== this._barcodeValue) {
      this._barcodeValue = _value;
      this._updateBarcode(_value);
    }
  }

  /**
   * @description
   * The order of [font, format] input values must be given before `barcodeValue`
   * input value to take place the given values whilst `_updateBarcode()` is getting
   * called on `barcodeValue` setter at the moment only. However, that is a candidate
   * to be refactored on `ngOnChanges()`. Nonetheless, I skip to do that now since
   * `ngOnChanges` seems expensive to me. Have to dig a bit deeper in that. :)
   */
  @Input() font = 'Open Sans';
  @Input() format: BarcodeFormat = BarcodeFormat.Code128;

  private _barcodeValue = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.elementRef.nativeElement.style.display = 'inline-block';
    this.elementRef.nativeElement.classList.add('ngx-barcode');
  }

  /**
   * @description
   * Reset the given value to host element by clearing the existing one,
   * and adding the new one
   */
  private _updateBarcode(value: string): void {
    this._clearBarcode();
    this._addBarcode(value);
  }

  /**
   * @description
   * Clear existing SVG barcode element by querying them as child elements.
   */
  private _clearBarcode(): void {
    const layoutElement: HTMLElement = this.elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;

    while (childCount--) {
      const child = layoutElement.childNodes[childCount];

      // We remove all svg elements in order to remove any old barcode svg.
      if (child.nodeName.toLowerCase() === 'svg') {
        child.remove();
      }
    }
  }

  /**
   * @description
   * Add new barcode by using `jsBarcode` by creating a new SVG element with
   * the help of injected `renderer` instance.
   */
  private _addBarcode(value: string): void {
    const svgElement: Element = this.renderer.createElement('svg', 'svg');
    svgElement.classList.add(`ngx-barcode-svg-${value}`);
    jsBarcode(svgElement, value, this._getOptions());
    this.renderer.appendChild(this.elementRef.nativeElement, svgElement);
  }

  /**
   * @returns Default barcode options to update the styles of created barcode
   */
  private _getOptions(): BarcodeOptions {
    return {
      background: '#FFFFFF',
      displayValue: true,
      font: this.font,
      fontSize: 20,
      format: this.format,
      height: 100,
      lineColor: '#000000',
      textAlign: 'center',
      textPosition: 'bottom',
      width: 2,
    };
  }
}
