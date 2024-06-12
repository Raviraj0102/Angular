import { Component,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent)boxId:ChildComponent={} as ChildComponent;
  @ViewChild('boxId1')boxId1:ElementRef={} as ElementRef;
  accessProperty():void{
    this.boxId.clickMe();

  }


  ngAfterViewInit(): void{
   

  }

}
