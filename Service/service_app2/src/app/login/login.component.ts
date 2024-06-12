import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[LoggingService]
})
export class LoginComponent implements OnInit {


  constructor(private logservice : LoggingService){
   // console.log(" login Error Info");

   // const ls = new LoggingService();
   // ls.LogErr();
   this.logservice.LogErr();
  }


  ngOnInit(): void {
    
  }

}
