import {Component, Injectable, InjectionToken, Injector, OnInit} from '@angular/core';

@Injectable()
class Product {
    constructor(
        private name: string,
        private model: string,
        private color: string,
        private price: number,
        private type: string
    ) {}
}

@Injectable()
class PurchaseOrder {
    constructor(
        private product: Product,
        private amount: number,
        private buyer: string
    ) {}

    public get getProduct(): Product {
        return this.product;
    }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

    constructor() { }
    date: Date;
    obj = { id: '112', name: 'xx手机', model: '全面屏' };
    price = 34;
    data = [1, 2, 3, 4, 5];

    ngOnInit() {
        this.price = 15313.366;
        this.date = this.minusMonths(new Date(), 15);
        const product = new Product('大米手机', 'DM-9', '黑色', 2999, '全网通');
        const purchaseOrder = new PurchaseOrder(product, 10, '张三');
        console.log('订单', purchaseOrder.getProduct);
        const token = new InjectionToken<string>('config');
        const injector = Injector.create({
            providers: [
                {
                    provide: Product,
                    useFactory: () => {
                        return new Product('大米手机', 'DM-9', '黑色', 2999, '全网通');
                    },
                    deps: []
                },
                {
                    provide: PurchaseOrder,
                    deps: [Product]
                },
                {
                    provide: token,
                    useValue: { baseUrl: 'http://local.dev' }
                }
            ]
        });
        console.log(injector.get(PurchaseOrder).getProduct);
        console.log(injector.get(token));
    }
    minusDays(date: Date, days: number) {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    }

    minusMonths(date: Date, months: number) {
        const result = new Date(date);
        result.setMonth(result.getMonth() - months);
        return result;
    }

}
