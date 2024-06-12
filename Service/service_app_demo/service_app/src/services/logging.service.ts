import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  Logserviceerror(){
    console.log("error logged -----------++++++++++++ Msg from service class Loggingservice");
  }
}
