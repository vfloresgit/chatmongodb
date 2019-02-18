import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
import { APP_ROUTING } from './app.routes';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AppComponent } from './app.component';

import { ChatComponent } from './components/chat/chat.component';
import { MenuComponent } from './directivas/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


const config: SocketIoConfig = { url:'http://localhost:3000', options:{}};


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    MaterialModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
