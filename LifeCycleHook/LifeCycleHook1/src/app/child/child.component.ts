import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit ,OnDestroy{

  constructor(){
    console.log(" --inside the childcomponent constructor..")
  }

  ngOnInit(): void {
    console.log("--inside the childComponent -- ngOnInit--")
  }

  ngOnDestroy(): void {
    console.log("--inside the child --- ngOnDestory....")
  }

}
