import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeContainerComponent } from './components';


@NgModule({
    declarations: [HomeContainerComponent],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        HomeContainerComponent
    ]
})
export class HomeModule { }
