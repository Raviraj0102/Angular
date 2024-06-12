import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private url:any='../assets/data.json';

  constructor(private http:HttpClient) {

    console.log(" inside the product service... ");
    //console.log('inside the product service :'+this.http);
    console.log("--->"+typeof(this.http.get(this.url)));
   }

  greetservice():string{
    return 'greet from product-service method...';
  }

  getData():Observable<Product[]>{

    return this.http.get<Product[]>(this.url);
  }
}
