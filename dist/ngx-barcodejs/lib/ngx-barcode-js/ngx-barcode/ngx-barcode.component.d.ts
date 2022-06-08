import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
export declare class NgxBarcodeComponent implements OnChanges {
    private elementRef;
    private renderer;
    barcodeValue: string;
    font: string;
    get options(): Record<string, string | number>;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    private _initBarcode;
    private _clearBarcode;
}
//# sourceMappingURL=ngx-barcode.component.d.ts.map