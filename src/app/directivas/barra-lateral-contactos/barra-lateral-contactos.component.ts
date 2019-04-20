import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(    
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {


  }

}
