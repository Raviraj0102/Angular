import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 form:FormGroup;
 constructor(){
  this.form= new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ])
  });
 }

 get u(){
  return this.form.controls;
 }
 get p(){
  return this.form.controls;
 }
login():void{
  console.log(this.form.value);
  let username= this.form.value.username;
  let password = this.form.value.password;

  if(username === password) alert('valid');
  else alert('invalid');
}
}
