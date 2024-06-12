import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() x:number=0;
  @Input('y') y1: any ;
  @Input() z:number =0;

}
