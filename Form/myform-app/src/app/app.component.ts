import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 fname:string='';
 pwd:string='';
 data1:any='';


 valid(input:any):void{
  if(input.valid){
    this.data1 = input.value;
    this.data1 = (JSON.stringify(this.data1));
  }else{
  alert("some error... ")
  }
 }
}
