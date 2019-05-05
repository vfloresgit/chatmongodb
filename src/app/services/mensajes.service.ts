import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(
    private http: HttpClient
  ) { }

   
  listadoMensajes(email, email_user){

    var data = {
      "email_contact":email,
      "email_user": email_user
    }

    return this.http.post(`${environment.baseUrl}mensajes/listar`,data);

  }

}
