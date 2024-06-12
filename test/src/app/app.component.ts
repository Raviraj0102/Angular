import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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

}
