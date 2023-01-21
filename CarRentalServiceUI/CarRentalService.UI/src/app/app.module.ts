
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BackgroundS1Component } from './home/background-s1/background-s1.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { SwiperComponent } from './home/about-us/swiper/swiper.component'
import { SwiperModule } from 'swiper/angular'
import { CarsComponent } from './cars/cars.component';
import { CollapseWhenRoutingDirective } from './directives/collapse-when-routing.directive';
import { CarComponent } from './cars/car/car.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { CarDetailsComponent } from './cars/car/car-details/car-details.component';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestHitsComponent } from './home/latest-hits/latest-hits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BackgroundS1Component,
    HomeComponent,
    AboutUsComponent,
    SwiperComponent,
    CarsComponent,
    CollapseWhenRoutingDirective,
    CarComponent,
    AboutUsComponent,
    NewsletterComponent,
    CarComponent,
    CarDetailsComponent,
    LoadingComponent,
    NotFoundComponent,
    LatestHitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
