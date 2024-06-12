import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit,DoCheck {
  flag:any=false;

  constructor(){
    console.log("  Inside the parentComponent constructor..");
  }

  ngOnInit(): void {
    console.log("inside the parentComponent -- ngOnInit..")
  }

  performsomeAction():void{
    this.flag=!this.flag;
  }
  ngDoCheck(): void {
    console.log("inside the NgDoCheck method....");
  }

  

}
