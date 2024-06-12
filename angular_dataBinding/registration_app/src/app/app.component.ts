import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username:string="";
  password:string="";
  comfirmPasswprd:string="";
  gender:string="";
  country:string="";
  msg:string="";

  registerUser(){
// logic
this.msg = "Registration SuccessFull..."
  }
}
