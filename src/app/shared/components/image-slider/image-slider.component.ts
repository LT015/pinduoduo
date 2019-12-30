import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

export interface ImageSlider {
    imgUrl: string;
    link: string;
    caption: string;
}


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
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
