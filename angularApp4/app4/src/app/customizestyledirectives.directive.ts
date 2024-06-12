import { Element } from '@angular/compiler';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomizestyledirectives]'
})
export class CustomizestyledirectivesDirective implements OnInit {

  constructor(private e:ElementRef) { 
    console.log(e);
  }

  ngOnInit(): void {
   // this.e.nativeElement.style.backgroundColor="cyan";
    //this.e.nativeElement.style.color="blue";
  }
    
}
