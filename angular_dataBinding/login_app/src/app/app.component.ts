import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  username:string='';
  password :string ='';
  msg:string ="";

  CheckLogin(){
    if(this.username == "admin" && this.password == "admin123"){
      this.msg = "Valid Credentials";
    }else{
      this.msg = "Invalid Credentials";
    }
  }
}
