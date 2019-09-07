import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  allUsers;
  constructor(
    private userService: UserService,
    private route: Router,
    private router: ActivatedRoute
    ) { }

  formGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required]),
    'password': new FormControl(null,[Validators.required ,Validators.minLength(5)])
  })

  // ERROR Error: The requested path contains null segment at index 0
  redirectUrl = this.router.snapshot.queryParamMap.get('redirectUrl')
  ngOnInit() {
    this.userService.login().subscribe(res => {
      this.allUsers = res;
      // console.log(this.allUsers)
    })
  }

  login() {
    this.allUsers.find(user => {
      if(this.formGroup.get('email').value === user.email && this.formGroup.get('password').value === user.password) {
        // console.log(this.formGroup.get('email').value === user.email)

        // ERROR Error: The requested path contains null segment at index 0
        this.route.navigate(['/user',user.id])
        // this.userService.getLogin = user;
        this.userService.isLoggedIn = user;
        this.userService.userloggedIn = true;

      } else {
        
      }
    })
        // this.userService.logging = user;
        // this.userService.getLogin.next(user);
  }
}
