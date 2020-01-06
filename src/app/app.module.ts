import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule, ParamInterceptor, NotificationInterceptor } from './home';
import {registerLocaleData} from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyModule} from './my';
import {CategoryModule} from './category';
import {RecommendModule} from './recommend';
import {ChatModule} from './chat';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HomeModule,
        HttpClientModule,
        RecommendModule,
        MyModule,
        CategoryModule,
        ChatModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'zh-Hans'
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ParamInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(localeZh, 'zh');
        // “练习结果”分支用于学习
    }
}
