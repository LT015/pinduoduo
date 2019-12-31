import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent} from './components';
import {FormsModule} from '@angular/forms';
import { GridItemImageDirective, GridItemDirective, GridItemTitleDirective} from './directives';



@NgModule({
    declarations: [
        ScrollableTabComponent,
        ImageSliderComponent,
        HorizontalGridComponent,
        GridItemImageDirective,
        GridItemTitleDirective,
        GridItemDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ScrollableTabComponent,
        ImageSliderComponent,
        HorizontalGridComponent,
        GridItemTitleDirective,
        GridItemDirective,
        GridItemImageDirective
    ]
})
export class SharedModule { }
