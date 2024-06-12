import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = 0;

  counter(type:string){

    type == 'add'? this.count++ :this.count-- ;

  }

}
