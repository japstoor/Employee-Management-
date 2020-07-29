import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token: any;
  users: any;
  

  constructor(private router : Router,private apiService: ServicesService,) { }
  LoginStatus$ : Observable<boolean>;
  ngOnInit(): void {
    this.LoginStatus$ = this.apiService.isLoggesIn;
   
    this.apiService.getUserProfile()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });
  }
  logOut(){
       
    this.apiService.logout();
}

}

