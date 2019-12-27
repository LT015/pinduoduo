import { Component, OnInit } from '@angular/core';

interface TopMenu {
    title: string;
    link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

    selectedIndex = -1;

    /**
     * 声明类型的好处是，可以及时的提示错误，可以试着改变下面的 title 或 link 的值类型
     * 看 VS Code 中的提示
     */
    menus: TopMenu[] = [
        {
            title: '热门',
            link: ''
        },
        {
            title: '男装',
            link: ''
        },
        {
            title: '百货',
            link: ''
        },
        {
            title: '运动',
            link: ''
        },
        {
            title: '手机',
            link: ''
        },
        {
            title: '家纺',
            link: ''
        },
        {
            title: '食品',
            link: ''
        },
        {
            title: '电器',
            link: ''
        },
        {
            title: '鞋包',
            link: ''
        },
        {
            title: '汽车',
            link: ''
        },
        {
            title: '水果',
            link: ''
        },
        {
            title: '电脑',
            link: ''
        },
        {
            title: '内衣',
            link: ''
        },
        {
            title: '家装',
            link: ''
        },
        {
            title: '母婴',
            link: ''
        },
        {
            title: '美妆',
            link: ''
        },
        {
            title: '家具',
            link: ''
        }
    ];

    constructor() { }

    ngOnInit() {
    }



    handleSelection(index: number) {
        this.selectedIndex = index;
    }
}
