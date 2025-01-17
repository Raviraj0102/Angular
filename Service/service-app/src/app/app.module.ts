import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPriceDetailsComponent } from './product-price-details/product-price-details.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ProductDetailsComponent,
        ProductPriceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
