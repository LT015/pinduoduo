import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from 'src/app//shared';
import {
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    PaymentComponent
} from './components';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';


@NgModule({
    declarations: [
        ProductContainerComponent,
        GroupItemComponent,
        GroupShortListComponent,
        PaymentComponent,
        ConfirmOrderComponent
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }
