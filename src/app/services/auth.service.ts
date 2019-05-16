import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credenciales){

    return this.http.post(`${environment.baseUrl}auth`, credenciales)

  }
  
  IsLogged(){

    const token = localStorage.getItem('token');
    if(token) return true
    return false

  }

  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('nombres');
    

  
  }

}
