import { Component } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LandingShop';
  slides = ['./assets/images/shoes.png', './assets/images/shoes.png', './assets/images/shoes.png', './assets/images/shoes.png'];
  isActive = false;
  isSpoiler = [false, false, false, false];
  sliderIndex = 0;
  isListDisplay = [true, true, true, true];
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false
  };
  public toggleSpoiler(index: number): void {
    this.isSpoiler[index] = !this.isSpoiler[index];
    this.isListDisplay[index] = !this.isListDisplay[index];
  }
}
