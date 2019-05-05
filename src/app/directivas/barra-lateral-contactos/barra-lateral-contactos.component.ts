import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
// import { ChatComponent } from '../../components/chat/chat.component';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-barra-lateral-contactos',
  templateUrl: './barra-lateral-contactos.component.html',
  styleUrls: ['./barra-lateral-contactos.component.css']
})
export class BarraLateralContactosComponent implements OnInit {

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    public listUsers = []
    public dataUser = []
    public listaMensajes = [];

  constructor(    
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private usuarioServices: UsuariosService,
    // private chatComponent: ChatComponent,
    public mensajeService: MensajesService
  ) { }

  ngOnInit() {
    

    const email_user = {"email":localStorage.getItem("email")}

    this.usuarioServices.getUser(email_user).subscribe(
      (result: any)=>{

         this.dataUser = result;
    
        
      },
      (err)=>{

      }

    )

    this.usuarioServices.getAll().subscribe(
      
      (users: any)=>{

        this.listUsers = users;
   
       
      },
      (err)=>{

      }

    )


  }

  // mensajesDeUsuario(email_contact){
  
    
  //   var email_user = localStorage.getItem("email"); 
    
  //   const data = this.chatComponent.listarMensajes(email_contact, email_user)




  // }

  
  listarMensajes(email_contact){

    var email_user = localStorage.getItem("email"); 

    this.mensajeService.listadoMensajes(email_contact, email_user).subscribe(
      (mensajes: any) => {
        
       this.listaMensajes = mensajes;

      },
      (err) => {


      }
      
    );
  }

}
