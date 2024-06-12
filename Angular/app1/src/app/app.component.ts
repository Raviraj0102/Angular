import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
  // below are the properties....
 homepage:string ="Welcome to Ravi";
 firstName:string = "Ravi";
 lastName:string="Mohale";
 age:number=30;
 localimage:string="../assets/bird.jpg"

 // method
 action1():void{
  alert('Welcome to Angular app')
 }
 action2():void{
  this.firstName="Raju";
  this.lastName ="More";
  this.age = 35;
 }
}
