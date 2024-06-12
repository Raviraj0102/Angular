import { Component, Inject } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[WelcomeService]
})
export class AppComponent {
  msg:string="";

  constructor(private welcomeservice:WelcomeService){
   // const ls = new WelcomeService();
   // ls.getWelcomeMsg();
    //console.log(ls.getWelcomeMsg());
   
  }

  getMsg(){

    this.welcomeservice.getWelcomeMsg();

  }
}
