import { Component } from '@angular/core';
import productData from '../myData.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  products:Product[]=productData
  /*  {"pid":1001,
      "pname":"Mobile",
      "price":10000.00
    },

    {"pid":1002,
    "pname":"Tv",
    "price":25000.00
  },
  {"pid":1003,
  "pname":"Laptop",
  "price":50000.00
},
{"pid":1004,
"pname":"Bike",
"price":1200000.00
}*/


;

constructor(){
  console.log(productData);
}


}

interface Product{
  pid:number;
  pname:string;
  price:number;
}
