import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTER: Routes = [
  
     {path:'chat', component: ChatComponent},
     {path:'login', component: LoginComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);