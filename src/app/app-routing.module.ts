import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './home/components';

const routes: Routes = [
    { path: '', component: HomeContainerComponent}
    ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
