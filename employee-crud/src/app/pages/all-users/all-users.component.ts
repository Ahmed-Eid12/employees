import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  user;
  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.user = data
      console.log(this.user)
    })
    
  }
 
}
