import { Component, OnInit } from '@angular/core';
import {HomeService} from 'src/app/home';
import {filter, map} from 'rxjs/operators';
import {Ad, Product} from 'src/app/shared';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {

    constructor(private service: HomeService) { }
    ad$: Observable<Ad>;

    products$: Observable<Product[]>;
    ngOnInit() {
        this.ad$ = this.service.getAdByTab('men').pipe(
            filter(ads => ads.length > 0),
            map(ads => ads[0])
        );
        this.products$ = this.service.getProductsByTab('men');
  }

}
