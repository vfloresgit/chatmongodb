import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(credenciales){
      
    // console.log(credenciales)
    this.authService.login(credenciales).subscribe(
      (result: any)=>{

        
        console.log("Usuario Logeado")
        // Swal({
        //   text: 'Logeado correctamente',
        //   type: 'success',
        // });
        localStorage.setItem('token', result.token);
        localStorage.setItem('email',result.email)
        localStorage.setItem('nombres',result.nombre)
        
      },
      (err)=>{

        
        console.log("Usuario no autorizado")
        // Swal({
        //   text: err.error.message,
        //   type: 'error',
        // });
      }
    )  
    
  }


}
