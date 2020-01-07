import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

export interface ImageSlider {
    id: number;
    imgUrl: string;
    link: string;
    caption: string;
}


@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
}) // onPush 加完之后只有在input变量改变的时候才触发脏值检测，而且只引发他们这一个分支的脏值检测，不会跑整个的树 变成一个“笨组件”
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() sliders: ImageSlider[] = [];
    @Input() sliderHeight = '160px';
    @ViewChild('imageSlider', {static : true}) imgSlider: ElementRef;
    @Input() intervalBySeconds = 5;
    selectedIndex = 0;
    constructor(private  rd2: Renderer2) { }
    intervalId;

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        if (this.intervalBySeconds <= 0) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.rd2.setProperty(
                this.imgSlider.nativeElement,
                'scrollLeft',
                (this.getIndex(++this.selectedIndex) *
                    this.imgSlider.nativeElement.scrollWidth) /
                this.sliders.length
            );
        }, this.intervalBySeconds * 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    getIndex(idx: number): number {
        return idx >= 0
            ? idx % this.sliders.length
            : this.sliders.length - (Math.abs(idx) % this.sliders.length);
    }

    handleScroll(ev) {
        // scrollLeft是向左滑动的距离,是整个连续图片的 不是某一张图片向左滑动的距离
        const ratio =
            ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
        this.selectedIndex = Math.round(ratio);
    }


}
