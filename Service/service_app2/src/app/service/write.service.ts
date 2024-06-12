import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor() { }

  writeErr(){
    console.log("write service error");
  }
}
