import { Injectable } from '@angular/core';
import { WriteService } from './write.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private writeer : WriteService) {
    this.writeer.writeErr();
   }

  LogErr(){
    console.log("Error Logged..");
  }
}
