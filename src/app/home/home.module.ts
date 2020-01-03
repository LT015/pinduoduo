import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { ParentComponent, ChildComponent } from './components';


@NgModule({
    declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent, ChildComponent],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        HomeContainerComponent
    ]
})
export class HomeModule { }
