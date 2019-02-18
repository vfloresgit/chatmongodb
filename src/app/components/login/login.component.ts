import { Component, OnInit } from '@angular/core';

//forms
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Tienes que ingresar un email' :
        this.email.hasError('email') ? 'email no valido' :
            '';
  }
  
  hide = true;

  constructor() { }

  ngOnInit() {
  }

}
