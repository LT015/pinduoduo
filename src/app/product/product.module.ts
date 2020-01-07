import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from 'src/app//shared';
import {
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent
} from './components';


@NgModule({
    declarations: [
        ProductContainerComponent,
        GroupItemComponent,
        GroupShortListComponent,
        ProductVariantDialogComponent,
        ProductAmountComponent
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
