import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parrentMessage:string="   Hello Child ,How are you... ";
  childDataReceived:string="";

  receivedData(data:any):void{
      this.childDataReceived=data;
  }

}
