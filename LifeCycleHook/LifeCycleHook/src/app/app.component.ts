import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = '';
  msg:string='Default value';
  constructor(){
    // Here we write the code of the following things..
    // 1 . It is use to initialize the some value into  the Property .
    // 2. Inside the constructor we also write the code  to invoke the services..
    this.title='Life Cycle Hook..';

    console.log('inside the constructor ......');
  }
someChanges(){
  this.msg="Ravi IT";
}
 

 
}
