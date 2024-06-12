import { Component, ElementRef, ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  uname:string="Raviraj";
  uname1:string ="Veer";
  @ViewChild('boxId')boxId:ElementRef={} as ElementRef;
  @ViewChild('boxId1')boxId1:ElementRef={} as ElementRef;
  
  constructor(private render:Renderer2){

  }

  clickMe():void{
    alert('yes it is working.....!');
    console.log(this.boxId);
   // this.boxId.nativeElement.style.color ='red';
   this.render.setStyle(this.boxId.nativeElement,"color","whilte");
   this.render.setStyle(this.boxId.nativeElement,"backgroundColor","red");
  }

  clickMe1():void{
    alert('working...');
    console.log(this.boxId1);
    this.boxId1.nativeElement.style.color ='blue';
  }
}
