import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';


@NgModule({
    declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        HomeContainerComponent
    ]
})
export class HomeModule { }
