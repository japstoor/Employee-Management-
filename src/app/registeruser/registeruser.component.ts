import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServicesService } from '../services/services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: ServicesService,
    private router: Router) 
  { }
  addUser: FormGroup;
  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      id:[],
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.addUser.value);
    
    this.apiService.addUser(this.addUser.value)
    .subscribe( data => {
      this.router.navigate(['/login1']);
      
    });
}
}
