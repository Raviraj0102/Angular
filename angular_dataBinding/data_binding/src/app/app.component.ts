import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data_binding';

  name:string="John";
  age :number = 30;



  isDisabled=false;


  handelSubmitBtn(){
    this.name = "Smith";
    this.age = 25;
  }
}
