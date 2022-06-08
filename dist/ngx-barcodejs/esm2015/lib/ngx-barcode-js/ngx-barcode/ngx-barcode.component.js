import { Component, ElementRef, Input, Renderer2, } from '@angular/core';
import * as jsBarcode from 'jsbarcode';
export class NgxBarcodeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhcmNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJhcmNvZGVqcy9zcmMvbGliL25neC1iYXJjb2RlLWpzL25neC1iYXJjb2RlL25neC1iYXJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBTXZDLE1BQU0sT0FBTyxtQkFBbUI7SUFVOUIsWUFDVSxVQUFtQyxFQUNuQyxRQUFtQjtRQURuQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWHBCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFZMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBWkQsSUFBVyxPQUFPO1FBQ2hCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFVTSxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE9BQU87U0FDUjtRQUVELE1BQU0sVUFBVSxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sYUFBYTtRQUNuQixNQUFNLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDakUsSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFakQsT0FBTyxVQUFVLEVBQUUsRUFBRTtZQUNuQixNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRW5ELHFFQUFxRTtZQUNyRSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO2dCQUMxQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDaEI7U0FDRjtJQUNILENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7OztZQVhDLFVBQVU7WUFHVixTQUFTOzs7MkJBVVIsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganNCYXJjb2RlIGZyb20gJ2pzYmFyY29kZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1iYXJjb2RlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4QmFyY29kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJhcmNvZGVWYWx1ZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGZvbnQgPSAnT3BlbiBTYW5zJztcblxuICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnQ6IHRoaXMuZm9udCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25neC1iYXJjb2RlJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRCYXJjb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0QmFyY29kZSgpIHtcbiAgICBpZiAoIXRoaXMuYmFyY29kZVZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnRWxlbWVudDogRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3ZnJywgJ3N2ZycpO1xuICAgIGpzQmFyY29kZShzdmdFbGVtZW50LCB0aGlzLmJhcmNvZGVWYWx1ZSwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuX2NsZWFyQmFyY29kZSgpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN2Z0VsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJCYXJjb2RlKCk6IHZvaWQge1xuICAgIGNvbnN0IGxheW91dEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGNoaWxkQ291bnQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGNoaWxkQ291bnQtLSkge1xuICAgICAgY29uc3QgY2hpbGQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XG5cbiAgICAgIC8vIFdlIHJlbW92ZSBhbGwgc3ZnIGVsZW1lbnRzIGluIG9yZGVyIHRvIHJlbW92ZSBhbnkgb2xkIGJhcmNvZGUgc3ZnLlxuICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19