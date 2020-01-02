import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
