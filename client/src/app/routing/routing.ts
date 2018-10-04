import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

const app_route:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},

];
export const routing = app_route;
