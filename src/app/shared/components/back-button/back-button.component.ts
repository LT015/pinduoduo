import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {
  float = true;
  constructor(private location: Location) {}

  ngOnInit() {}

  get imageUrl() {
    return this.float
      ? `assets/icons/back_light.png`
      : `assets/icons/back_dark.png`;
  }

  handleBack() {
    this.location.back();
  }
}
