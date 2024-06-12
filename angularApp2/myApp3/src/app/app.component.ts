import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp3';
  myColor:string ="";
  myFont:string ="";
  myclass:string="";



  action1():void{
    alert('From first Button');
    //this.myColor="red";
    //this.myFont= "30px";
    this.myclass="classA"
  }
  action2():void{
    alert('From second Button');
    //this.myColor="blue";
    //this.myFont= "50px";
    this.myclass="classB"
  }

}
