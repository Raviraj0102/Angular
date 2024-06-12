import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }
  msg1:string =""

  getWelcomeMsg():any{
    this.msg1 ="Welcome to Service in Angualr...";
    return this.msg1;
  }
}
