import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEventDirectives1]'
})
export class EventDirectives1Directive implements OnInit {

  constructor(private e:ElementRef,private renderer:Renderer2) {

   }

   ngOnInit(): void {
    this.e.nativeElement.style.color="red";
     
   }

@HostListener('click')method(event:Event){
   this.renderer.setStyle(this.e.nativeElement,'color','blue');
}

}
