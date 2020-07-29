import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './students/add/add.component';
import {ViewComponent } from './students/view/view.component';
import {EditComponent} from './students/edit/edit.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import {Login1Component} from "./login1/login1.component";
import { AuthGuard } from './auth/auth.guard';
import { NavComponent } from './nav/nav.component';







const routes: Routes = [
  
  
  { path: 'add', component: AddComponent,canActivate:[AuthGuard]},
  {path: 'view', component: ViewComponent,canActivate:[AuthGuard]},
  {path: 'edit/:id', component: EditComponent,canActivate:[AuthGuard]},
  {path: 'registeruser',component:RegisteruserComponent},
  {path: 'login1', component: Login1Component},
  {path: '', redirectTo: '/login1',pathMatch: 'full'},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
