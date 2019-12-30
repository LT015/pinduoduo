import { Component } from '@angular/core';
import {ImageSlider, TopMenu} from './components';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    topMenus: TopMenu[] = [
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

    imageSliders: ImageSlider[] = [
        {
            imgUrl:
                'http://47.95.212.222:8080/images/notice/notices6.jpg',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://47.95.212.222:8080/images/notice/notices3.jpg',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://47.95.212.222:8080/images/notice/notices4.jpg',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://47.95.212.222:8080/images/notice/notices1.jpg',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://47.95.212.222:8080/images/notice/notices5.jpg',
            link: '',
            caption: ''
        }
    ];

    handleTabSelected(topMenu: TopMenu) {
        console.log(topMenu);
    }

}
