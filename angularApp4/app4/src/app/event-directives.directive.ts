import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEventDirectives]'
})
export class EventDirectivesDirective implements OnInit {

  constructor(private e:ElementRef, private renderer:Renderer2) { 


  }

  ngOnInit(): void {
    this.e.nativeElement.style.color="green";
    
  }

  @HostListener('mouseover')method1(event:Event){
    this.e.nativeElement.style.color="red";

  }
  @HostListener('mouseenter')method2(event:Event){
    this.e.nativeElement.style.color="yellow";

  }

  @HostListener('mouseout')method3(event:Event){
    this.e.nativeElement.style.color="blue";

  }

  @HostListener('mouseout')method4(event:Event){
    //this.e.nativeElement.style.color="blue";
    this.renderer.setStyle(this.e.nativeElement,'backgroundColor','black');
    this.renderer.setStyle(this.e.nativeElement,'color','white');

  }
}
