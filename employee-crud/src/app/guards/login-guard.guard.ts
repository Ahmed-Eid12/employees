import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private route: Router
  ){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.isLoggedIn != null) {
      console.log("this.userService.isLoggedIn", this.userService.isLoggedIn)
      console.log(this.userService.isLoggedIn? "true":"false")
      return true;
    } else {
      
      // console.log(state.url)
      this.route.navigate(['/login'],{
        queryParams:{
          redirectUrl: state.url
        }
      })
      return false;
    }
  }
  
}
