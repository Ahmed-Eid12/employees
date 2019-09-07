import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userloggedIn = false

  getLogin = new BehaviorSubject(null);
  isLoggedIn = null;

  logging = null;

  getUsers() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.get('http://localhost:7071/users/allusers' ,{
      headers: headers
    });
  }
  save(user: Users) {
    return this.http.post('http://localhost:7071/users/allusers', user);
  }
  editUser(id , user) {
    return this.http.put('http://localhost:7071/users/allusers/' + id , user);
  }
  deleteUser(id) {
    return this.http.delete('http://localhost:7071/users/allusers/' + id);
  }
  showUserProfile(id) {
    return this.http.get('http://localhost:7071/users/allusers/' + id);
  }
  login(){
    return this.http.get('http://localhost:7071/users/allusers'); 
  }

  logout() {
    // this.logging = null;
    // this.getLogin.next(null);
  }
}
