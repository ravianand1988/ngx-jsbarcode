(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jsbarcode'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-barcodejs', ['exports', '@angular/core', 'jsbarcode', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-barcodejs'] = {}, global.ng.core, global.jsBarcode, global.ng.common));
}(this, (function (exports, core, jsBarcode, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var jsBarcode__namespace = /*#__PURE__*/_interopNamespace(jsBarcode);

    var NgxBarcodeComponent = /** @class */ (function () {
        function NgxBarcodeComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.barcodeValue = '';
            this.font = 'Open Sans';
            this.elementRef.nativeElement.style.display = 'inline-block';
            this.elementRef.nativeElement.classList.add('ngx-barcode');
        }
        Object.defineProperty(NgxBarcodeComponent.prototype, "options", {
            get: function () {
                return {
                    font: this.font,
                };
            },
            enumerable: false,
            configurable: true
        });
        NgxBarcodeComponent.prototype.ngOnChanges = function (changes) {
            this._initBarcode();
        };
        NgxBarcodeComponent.prototype._initBarcode = function () {
            if (!this.barcodeValue) {
                return;
            }
            var svgElement = this.renderer.createElement('svg', 'svg');
            jsBarcode__namespace(svgElement, this.barcodeValue, this.options);
            this._clearBarcode();
            this.renderer.appendChild(this.elementRef.nativeElement, svgElement);
        };
        NgxBarcodeComponent.prototype._clearBarcode = function () {
            var layoutElement = this.elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;
            while (childCount--) {
                var child = layoutElement.childNodes[childCount];
                // We remove all svg elements in order to remove any old barcode svg.
                if (child.nodeName.toLowerCase() === 'svg') {
                    child.remove();
                }
            }
        };
        return NgxBarcodeComponent;
    }());
    NgxBarcodeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-barcode',
                    template: '<ng-content></ng-content>'
                },] }
    ];
    NgxBarcodeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NgxBarcodeComponent.propDecorators = {
        barcodeValue: [{ type: core.Input }],
        font: [{ type: core.Input }]
    };

    var NgxBarcodeJsModule = /** @class */ (function () {
        function NgxBarcodeJsModule() {
        }
        return NgxBarcodeJsModule;
    }());
    NgxBarcodeJsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgxBarcodeComponent],
                    imports: [common.CommonModule],
                    exports: [NgxBarcodeComponent],
                },] }
    ];

    /*
     * Public API Surface of ngx-barcodejs
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxBarcodeComponent = NgxBarcodeComponent;
    exports.NgxBarcodeJsModule = NgxBarcodeJsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-barcodejs.umd.js.map
