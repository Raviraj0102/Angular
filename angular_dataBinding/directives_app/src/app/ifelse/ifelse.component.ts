import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  marks:number = 30;
  status:boolean= false;

  constructor(){
    if(this.marks >=35){
      this.status= true;
    }else{
      this.status = false;
    }
  }

}
