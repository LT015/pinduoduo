import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {

    @Input() appGridItemImage = '2rem';
    constructor(private elr: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {
        // 声明自己占据模版中的image区块
        this.setStyle('grid-area', 'image');
        this.setStyle('width', this.appGridItemImage);
        this.setStyle('height', this.appGridItemImage);
        this.setStyle('object-fit', 'cover');
    }

    private setStyle(styleName: string, styleValue: string | number) {
        this.renderer2.setStyle(this.elr.nativeElement, styleName, styleValue);
    }
}
