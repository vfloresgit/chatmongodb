import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  public listaMensajes = [];
  public message = '';

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() {

    this.socketService.on('newMessage',(data)=>{
      this.listaMensajes.push(data);  
  });
 
  }
  
  enviarMensaje(){

    const message = {
      userName: 'Anonimous',
      message: this.message
    };

    this.socketService.emit('newMessage',message);
    this.message = '';
    

  }
  
}
