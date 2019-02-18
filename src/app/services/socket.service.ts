import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket
  ) { }

  on(eventName, callback){
    this.socket.on(eventName,(data)=>{
      callback(data)
    })
  }

  emit(eventName, data){
    this.socket.emit(eventName,data)
  }

}
