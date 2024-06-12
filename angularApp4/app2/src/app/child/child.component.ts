import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input('y') y:string ='';

  @Output() myEvent:EventEmitter<string>=new EventEmitter(); // as of now we create a EventEmitter Object for sending the data
  sendData():void{
    this.myEvent.emit('Hello,I am fine');

  }

}
