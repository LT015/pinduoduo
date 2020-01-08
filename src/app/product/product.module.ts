import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from 'src/app//shared';
import {
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    PaymentComponent
} from './components';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';


@NgModule({
    declarations: [
        ProductContainerComponent,
        GroupItemComponent,
        GroupShortListComponent,
        ProductVariantDialogComponent,
        ProductAmountComponent,
        PaymentComponent,
        ConfirmOrderComponent
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
