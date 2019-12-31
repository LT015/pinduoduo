import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
    @HostBinding('style.font-size')
    @Input()
    appGridItemTitle = '0.5rem';
    @HostBinding('style.grid-area')
    area = 'title';
    // 内容不折行显示
    @HostBinding('style.white-space')
    wrap = 'nowrap';
}
