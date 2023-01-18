
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BackgroundS1Component } from './home/background-s1/background-s1.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BackgroundS1Component,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
