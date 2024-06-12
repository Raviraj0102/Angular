import { Component, OnInit, input } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  message ='';
  products:Product[]=[];
  dt:Date=new Date();
  input:any= 10;
  constructor(private productService:ProductserviceService){}
  ngOnInit(): void {

    console.log(this.productService);
    this.message = this.productService.greetservice();
    this.productService.getData().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
    
  }
  
}
