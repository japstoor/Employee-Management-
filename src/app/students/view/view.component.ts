import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ApiResponse } from '../../Model/api-response';
import {Router} from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: any;
  token: any;
 
  constructor( 
    private apiService: ServicesService,
    private router : Router
    ) { }

  ngOnInit() {
    
    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });
   

  }


  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  edit(user: User): void {
    this.router.navigate(['edit/' + user.id]);
  }
  logOut(){
       
    localStorage.removeItem("token");
    this.router.navigate(['/login1']);
}

}
