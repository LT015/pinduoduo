import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TopMenu {
    id: number;
    title: string;
    link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {

    selectedIndex = 0;

    /**
     * 声明类型的好处是，可以及时的提示错误，可以试着改变下面的 title 或 link 的值类型
     * 看 VS Code 中的提示
     */
    @Input() selectedTabLink: string;
    @Input() menus: TopMenu[] ;
    @Input() backgroundColor = '#fff';
    @Input() titleActiveColor = 'yellow';
    @Input() titleColor = 'black';
    @Input() indicatorColor = 'brown';
    @Output() tabSelected = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }



    handleSelection(index: number) {
        this.tabSelected.emit(this.menus[index]);
    }
}
