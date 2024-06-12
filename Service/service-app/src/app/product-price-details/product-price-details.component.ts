import { Component } from '@angular/core';
import productData from '../myData.json';

@Component({
  selector: 'app-product-price-details',
  templateUrl: './product-price-details.component.html',
  styleUrl: './product-price-details.component.css'
})
export class ProductPriceDetailsComponent {
  products:Product[]=productData;

  constructor(){
    console.log(productData);
  }





}

interface Product{
  pid:number;
  pname:string;
  price:number;
}


