import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

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
    

  constructor(    
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private usuarioServices: UsuariosService
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

}
