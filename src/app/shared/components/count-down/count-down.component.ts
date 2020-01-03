import {Component, Input, OnInit} from '@angular/core';
import {map, takeWhile} from 'rxjs/operators';
import {interval, Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
    @Input() startDate = new Date();
    @Input() futureDate: Date;
    private _MS_PER_SECOND = 1000;

    countDown$: Observable<string>;

    constructor() {
    }

    ngOnInit() {
        this.countDown$ = this.getCountDownObservable(
            this.startDate,
            this.futureDate
        );
    }

    private getCountDownObservable(startDate: Date, futureDate: Date) {
        // interval是一个计数器 用时间差减去这个数就是倒计时剩余的时间 在这里是以一千毫秒为单位增长
        return interval(1000).pipe(
            map(elapse => this.diffInSec(startDate, futureDate) - elapse),
            takeWhile(gap => gap >= 0), // 当表达式为真时订阅这个流，为假就complete结束了
            map(sec => ({
                day: Math.floor(sec / 3600 / 24),
                hour: Math.floor((sec / 3600) % 24),
                minute: Math.floor((sec / 60) % 60),
                second: Math.floor(sec % 60)
            })),
            // tap(val => console.log(val)),
            map(({hour, minute, second}) => `${hour}:${minute}:${second}`)
        );
    }

    private diffInSec = (start: Date, future: Date): number => {
        const diff = future.getTime() - start.getTime();
        return Math.floor(diff / this._MS_PER_SECOND);
    }
}
