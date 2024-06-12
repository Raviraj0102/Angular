import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm';
  loginForm = new FormGroup({
    username:new FormControl(),
    password : new FormControl()
  });

  submitLogin():void{
    console.log(this.loginForm.value);
  }
}
