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

    const comunicacion = {
      
      mensaje: this.mensaje

    }

    this.socketService.emit('nuevoMensaje', comunicacion);
    this.mensaje = '';



  }

  
}
