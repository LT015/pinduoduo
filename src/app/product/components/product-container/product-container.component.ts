import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {ProductVariant} from '../../domain';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
    variants$: Observable<ProductVariant[]>;
    selectedIndex = 0;
    constructor(private route: ActivatedRoute,
                private orderService: OrderService) { }

    ngOnInit() {
        const productId$ = this.route.paramMap.pipe(
            filter(params => params.has('productId')),
            map(params => params.get('productId'))
        );
        this.variants$ = productId$.pipe(
            switchMap(productId =>
                    this.orderService.getProductVariantsByProductId(productId)
            )
        );
    }
    handleDirectBuy(variants: ProductVariant[]) {}

    handleGroupBuy(variants: ProductVariant[]) {

    }

}
