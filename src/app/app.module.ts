import { UsuariosService } from './services/usuarios.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BarraLateralContactosComponent } from './directivas/barra-lateral-contactos/barra-lateral-contactos.component';
// import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DialogComponent } from './dialog/dialog.component';


const config: SocketIoConfig = { url:'http://localhost:3000', options:{}};


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    LoginComponent,
    BarraLateralContactosComponent,
    // MyDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    MaterialModule,
    SocketIoModule.forRoot(config)
  ],
  entryComponents:[
    DialogComponent
  ],
  providers: [UsuariosService,AuthService],
  bootstrap: [AppComponent] 
})

export class AppModule { }
