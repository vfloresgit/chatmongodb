import { BarraLateralContactosComponent } from './directivas/barra-lateral-contactos/barra-lateral-contactos.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTER: Routes = [
  
     {path:'chatservice', component: BarraLateralContactosComponent},
     {path:'login', component: LoginComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);