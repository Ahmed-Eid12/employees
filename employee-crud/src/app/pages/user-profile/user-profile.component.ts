import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router,
    private router: ActivatedRoute
  ){

  }

  /**
   * @get_user by it's id
   */

  user;

  userName;
  firstName;
  lastName;

  usersId = this.router.snapshot.paramMap.get('userId')
  ngOnInit() {
    // console.log(this.usersId)
    this.userService.showUserProfile(this.usersId).subscribe(res => {
      this.user = res;
      this.userName = this.user.userName
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName
    })
    
  }
  // logout service
  logout() {
    // this.userService.getLogin = null;
    this.userService.isLoggedIn = null;
    // this.userService.logging = false;
    console.log(this.userService.getLogin? "true":"false")
    this.route.navigate(["/login"]);
  }
 
}
