import { Component, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import * as jsBarcode from 'jsbarcode';
import { CommonModule } from '@angular/common';

class NgxBarcodeComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.barcodeValue = '';
        this.font = 'Open Sans';
        this.elementRef.nativeElement.style.display = 'inline-block';
        this.elementRef.nativeElement.classList.add('ngx-barcode');
    }
    get options() {
        return {
            font: this.font,
        };
    }
    ngOnChanges(changes) {
        this._initBarcode();
    }
    _initBarcode() {
        if (!this.barcodeValue) {
            return;
        }
        const svgElement = this.renderer.createElement('svg', 'svg');
        jsBarcode(svgElement, this.barcodeValue, this.options);
        this._clearBarcode();
        this.renderer.appendChild(this.elementRef.nativeElement, svgElement);
    }
    _clearBarcode() {
        const layoutElement = this.elementRef.nativeElement;
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
NgxBarcodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-barcode',
                template: '<ng-content></ng-content>'
            },] }
];
NgxBarcodeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NgxBarcodeComponent.propDecorators = {
    barcodeValue: [{ type: Input }],
    font: [{ type: Input }]
};

class NgxBarcodeJsModule {
}
NgxBarcodeJsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxBarcodeComponent],
                imports: [CommonModule],
                exports: [NgxBarcodeComponent],
            },] }
];

/*
 * Public API Surface of ngx-barcodejs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxBarcodeComponent, NgxBarcodeJsModule };
//# sourceMappingURL=ngx-barcodejs.js.map
