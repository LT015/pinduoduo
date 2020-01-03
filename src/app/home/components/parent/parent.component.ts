import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
    constructor() {}
    title = '';
    startDate = new Date(2019, 6, 1);
    futureDate = new Date(2019, 6, 2);
    ngOnInit() {
        fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any) =>
            console.log(ev.target.value)
        );
        console.log('hello');
    }
    handleClick() {}

}
