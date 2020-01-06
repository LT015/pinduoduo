import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent
} from './components';
import {FormsModule} from '@angular/forms';
import {GridItemImageDirective,
    GridItemDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective
} from './directives';
import { AgoPipe } from './pipes';


@NgModule({
    declarations: [
        ScrollableTabComponent,
        ImageSliderComponent,
        HorizontalGridComponent,
        GridItemImageDirective,
        GridItemTitleDirective,
        GridItemDirective,
        AgoPipe,
        CountDownComponent,
        FooterComponent,
        VerticalGridComponent,
        ProductCardComponent,
        TagDirective,
        AvatarDirective,
        ProductTileComponent,
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
        GridItemImageDirective,
        AgoPipe,
        CountDownComponent,
        FooterComponent,
        VerticalGridComponent,
        ProductCardComponent,
        TagDirective,
        AvatarDirective,
        ProductTileComponent,
    ]
})
export class SharedModule { }
