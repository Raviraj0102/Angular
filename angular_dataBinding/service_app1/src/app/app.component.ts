import { Component, Inject, Injectable } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service_app1';

  msg :string="";

  constructor(@Inject (LoginService) private m: LoginService){

  }

  getMsg(){

    this.msg = this.m.getWelcomeMsg();
  }
}
