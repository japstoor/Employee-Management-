import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './students/add/add.component';
import { EditComponent } from './students/edit/edit.component';
import { ViewComponent } from './students/view/view.component';
import {Login1Component} from "./login1/login1.component";

import { HttpClientModule, HTTP_INTERCEPTORS,  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ServicesService } from './services/services.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import {AuthGuard} from './auth/auth.guard';






@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    RegisteruserComponent,
    Login1Component,
    NavComponent,
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    
    
    
     
    
  ],
  providers: [ServicesService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
