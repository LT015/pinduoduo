import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollableTabComponent} from './components/scrollable-tab';
import {ImageSliderComponent} from './components/image-slider';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        ScrollableTabComponent,
        ImageSliderComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [CommonModule, FormsModule, ScrollableTabComponent, ImageSliderComponent]
})
export class SharedModule { }
