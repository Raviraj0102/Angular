import { Component } from '@angular/core';

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrl: './clazz.component.css'
})
export class ClazzComponent {

  marks:number = 70;

  myclass:string ="";

  constructor(){
    if(this.marks >=65){
      this.myclass="class1";
    }else{
      this.myclass ="class2"
    }
  
  }
}
