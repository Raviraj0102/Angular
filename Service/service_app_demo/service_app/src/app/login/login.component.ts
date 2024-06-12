import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(){

    const ls = new LoggingService();
    ls.Logserviceerror();
  }

}
