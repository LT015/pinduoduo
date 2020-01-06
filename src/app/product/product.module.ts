import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from 'src/app//shared';
import {ProductContainerComponent} from './components';


@NgModule({
    declarations: [ProductContainerComponent],
    imports: [
        SharedModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }
