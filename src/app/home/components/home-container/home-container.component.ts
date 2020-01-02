import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import {Router} from '@angular/router';
import {HomeService} from '../../services';
import {serialize} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

    constructor(private router: Router, private service: HomeService) { }
    topMenus: TopMenu[] = [];
    ngOnInit() {

    }

    handleTabSelected(topMenu: TopMenu) {
        this.router.navigate(['home', topMenu.link]);
        this.topMenus = this.service.getTabs();
    }
}
