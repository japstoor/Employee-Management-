import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ServicesService} from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: ServicesService) { }
   ngOnInit() {
    this.loginForm = this.formBuilder.group({ 
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
   }

   onSubmit(){
     
    console.log(this.loginForm.value);
     if (this.loginForm.invalid) {
      return;
    }

     const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.apiService.login(loginData).subscribe((data: any) =>{
      
      this.message = data.message;
     // console.log(data.token);
      if(data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['view']);
       } else {
         this.invalidLogin = true;
        // alert('a' + data.message);
       }
     });
 
     localStorage.setItem('loginStatus','1');

   }
  }