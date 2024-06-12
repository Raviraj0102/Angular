import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { UpComponent } from './up/up.component';
import { TgComponent } from './tg/tg.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    UpComponent,
    TgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
