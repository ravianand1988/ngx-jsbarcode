import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import * as jsBarcode from 'jsbarcode';

@Component({
  selector: 'ngx-barcode',
  template: '<ng-content></ng-content>',
})
export class NgxBarcodeComponent implements OnChanges {
  @Input() barcodeValue: string = '';
  @Input() font = 'Open Sans';

  public get options(): Record<string, string | number> {
    return {
      font: this.font,
    };
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.elementRef.nativeElement.style.display = 'inline-block';
    this.elementRef.nativeElement.classList.add('ngx-barcode');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this._initBarcode();
  }

  private _initBarcode() {
    if (!this.barcodeValue) {
      return;
    }

    const svgElement: Element = this.renderer.createElement('svg', 'svg');
    jsBarcode(svgElement, this.barcodeValue, this.options);

    this._clearBarcode();
    this.renderer.appendChild(this.elementRef.nativeElement, svgElement);
  }

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
}
