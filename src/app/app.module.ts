import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home';
import {registerLocaleData} from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'zh-Hans' }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registerLocaleData(localeZh, 'zh');
    }
}
