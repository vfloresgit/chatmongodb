import { SocketService } from 'src/app/services/socket.service';
import { Component, OnInit, Input } from '@angular/core';
// import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  // public listaMensajes = [
  //   {comment:"Hola Laura me gustas"},
  //   {comment:"Hola Victor tu tambien me gustas"},
  // ];
  @Input() listaMensajes: any;
  @Input() dataContact: any;
  // public listaMensajes = [];
  public mensaje = '';

  constructor(
    private socketService: SocketService
    // public mensajeService: MensajesService
   
  ) { }

  ngOnInit() {

    this.socketService.on('nuevoMensaje',(data)=>{
      this.listaMensajes.push(data);  
    });

  

  }
  
  enviarMensaje(){

    for (let contact of this.dataContact) {
      
      var data_contact = contact.email; // 1, "string", false
      var nombres_completo = contact.nombres+' '+contact.apellidos
    }
    
    var data_user = localStorage.getItem("email")
    var emisor_nombres = localStorage.getItem("nombres")

    const comunicacion = {
      emisor: data_user,
      emisor_nombre:emisor_nombres,
      receptor: data_contact,
      receptor_nombre : nombres_completo,
      mensaje: this.mensaje

    }

    this.socketService.emit('nuevoMensaje', comunicacion);
    this.mensaje = '';



  }

  
}
