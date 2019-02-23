import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  public listaMensajes = [
    {comment:"Hola Laura me gustas"},
    {comment:"Hola Victor tu tambien me gustas"},
  ];
  public mensaje = '';

  constructor(
   
  ) { }

  ngOnInit() {

  //   this.socketService.on('newMessage',(data)=>{
  //     this.listaMensajes.push(data);  
  // });
 
  }
  
  enviarMensaje(){

     var data = {comment: this.mensaje};
    this.listaMensajes.push(data); 
    this.mensaje = '';
    

  }
  
}
