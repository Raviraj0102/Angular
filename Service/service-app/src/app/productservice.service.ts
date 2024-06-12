import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() {
    console.log("--- inside the productServices----")
   }

   greetingMessage():string{
      return "from product service...";
   }
}
