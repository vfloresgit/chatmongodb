import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
// import { ChatComponent } from '../../components/chat/chat.component';
import { MensajesService } from 'src/app/services/mensajes.service';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

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
    // public dataContact = [];
    public dataContact = null;
    public listaMensajes = [];
    // public valueDataContact = null;
    public cantidad_notifiaciones = "9";

  constructor(    
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private usuarioServices: UsuariosService,
    // private chatComponent: ChatComponent,
    public mensajeService: MensajesService,
    public dialog: MatDialog
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


  
  listarMensajes(email_contact){

        var email_user = localStorage.getItem("email"); 

        var data = {
          "email":email_contact
        }

      this.usuarioServices.getUser(data).subscribe(

            (contact: any)=>{

              this.dataContact = contact;
            
            },
            (err)=>{

            }

        )

        this.mensajeService.listadoMensajes(email_contact, email_user).subscribe(
          (mensajes: any) => {
            
          this.listaMensajes = mensajes;

          },
          (err) => {


          }
          
        );
      
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {});
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  VerifyDataContact(){

    const value = this.dataContact ;

    
    if(value == null){
      
      return true
    }else{

      return false

    }
    
  }

}
