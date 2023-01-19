import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SwiperComponent implements OnInit {

  slides$ = new BehaviorSubject<string[]>(['']);
  constructor() { }

  ngOnInit(): void {
    this.slides$.next(
      Array.from([`ferrari`, `bmw`, 'audi', 'tesla', 'bugatti', 'lamborghini', 'mercedes', 'RR']).map((el, index) => `assets/${el}.png`)
    );
  }
}
