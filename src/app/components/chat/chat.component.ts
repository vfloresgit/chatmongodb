import { SocketService } from 'src/app/services/socket.service';
import { Component, OnInit } from '@angular/core';


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
  public listaMensajes = [];
  public mensaje = '';

  constructor(
    private socketService: SocketService
   
  ) { }

  ngOnInit() {

    this.socketService.on('nuevoMensaje',(data)=>{
      this.listaMensajes.push(data);  
  });
 
  }
  
  enviarMensaje(){

    const comunicacion = {
      
      comment: this.mensaje

    }

    this.socketService.emit('nuevoMensaje', comunicacion);
    this.mensaje = '';

    //  var data = {comment: this.mensaje};
    // this.listaMensajes.push(data); 
    // this.mensaje = '';s
    


  }
  
}
