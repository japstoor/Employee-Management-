import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {User} from '../Model/user';
import { ApiResponse } from '../Model/api-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
 
})
export class ServicesService {
 addabc(value: any) {
    throw new Error("Method not implemented.");
  }
  header : any

  constructor(private http: HttpClient, private router: Router) { }
  baseUrl ='https://localhost:44373/api/students';
  baseUrl2='https://localhost:44373/api/ApplicationUser/Register';
  baseUrl3='https://localhost:44373/api/ApplicationUser/Login';
  baseUrl4='https://localhost:44373/api/UserProfile';
 
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
 
  login(loginData): Observable<ApiResponse> { 
    return this.http.post<ApiResponse>(`${this.baseUrl3}/`, loginData).pipe(

      map(result => {

        // login successful if there's a jwt token in the response
        if(result && result.token) 
        {
              // store user details and jwt token in local storage to keep user logged in between page refreshes

            this.loginStatus.next(true);
            localStorage.setItem('loginStatus', '1');
            localStorage.setItem('token', result.token);

        }

         return result;


      })
        
      );
  }
  logout() 
    {
        // Set Loginstatus to false and delete saved jwt cookie
        this.loginStatus.next(false);
        localStorage.removeItem('token');
        localStorage.setItem('loginStatus', '0');
        this.router.navigate(['/login1']);
        console.log("Logged Out Successfully");

    }
   
  getUsers(): Observable<ApiResponse[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.get<ApiResponse[]>(`${this.baseUrl}/`, httpOptions );
  }
   getUserById(id: number): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(`${this.baseUrl}/${id}`);
   }
  createUser(id: number): Observable<ApiResponse> {
    const httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<ApiResponse>(`${this.baseUrl}/`,id, httpOptions);  
  }
  deleteUser(id: number): Observable<ApiResponse[]> {
    return this.http.delete<ApiResponse[]>(`${this.baseUrl}/${id}`);
  }

  updateStudent(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/${user.id}`,user);
  }
  addUser(id: number): Observable<ApiResponse> {
    const httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<ApiResponse>(`${this.baseUrl2}/`,id, httpOptions);  
  }
  getUserProfile(): Observable<ApiResponse[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.get<ApiResponse[]>(`${this.baseUrl4}/`, httpOptions );
  }
  checkLoginStatus() : boolean 
  {
    
      var loginCookie = localStorage.getItem("loginStatus");
  if(loginCookie == "1") 
        {
          

            return true;
            
        } 
        return false;
       }

       get isLoggesIn() 
       {
           return this.loginStatus.asObservable();
       }
 
}