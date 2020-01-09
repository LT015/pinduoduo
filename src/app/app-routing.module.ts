import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'my', loadChildren: () => import('./my').then(m => m.MyModule) },
    {
        path: 'recommend',
        loadChildren: () => import('./recommend').then(m => m.RecommendModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./chat').then(m => m.ChatModule)
    },
    {
        path: 'category',
        loadChildren: () => import('./category').then(m => m.CategoryModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./product').then(m => m.ProductModule)
    },
    {
        path: 'orders',
        loadChildren: () => import('./product').then(m => m.ProductModule)
    }
    ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
