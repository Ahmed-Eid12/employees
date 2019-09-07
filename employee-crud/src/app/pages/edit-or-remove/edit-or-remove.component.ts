
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-or-remove',
  templateUrl: './edit-or-remove.component.html',
  styleUrls: ['./edit-or-remove.component.scss']
})
export class EditOrRemoveComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    ) { }

    user_id;
    user_name;
    user_firstName;
    user_lastName;
    user_password;
    user_confirmPassword;
    user_email;

    changePassword = false;

    allUsers = []
    userId = this.router.snapshot.paramMap.get('id') ;
    
  ngOnInit() {
    
    this.userService.getUsers().subscribe((data: any) => {
      this.allUsers = data
      let found = this.allUsers.find((element) => {
        
        return element.id == this.userId
      });
      this.user_id = this.formGroup.get('id').setValue(found.id);
      this.user_name = this.formGroup.get('userName').setValue(found.userName);
      this.user_password = this.formGroup.get('password').setValue(found.password);
      this.user_confirmPassword = this.formGroup.get('confirmPassword').setValue(found.password);
      this.user_firstName = this.formGroup.get('firstName').setValue(found.firstName);
      this.user_lastName = this.formGroup.get('lastName').setValue(found.lastName);
      this.user_email = this.formGroup.get('email').setValue(found.email);
      // set 
      // this.formGroup.get('id').setValue(found.email);
    })
    
  }
  formGroup = new FormGroup({
    'id': new FormControl(this.user_id ,[Validators.required]),
    'userName': new FormControl(this.user_name,[Validators.required]),
    'firstName': new FormControl(this.user_firstName,[Validators.required]),
    'lastName': new FormControl(this.user_lastName,[Validators.required]),
    'password': new FormControl(this.user_password,[Validators.required]),
    'confirmPassword': new FormControl(this.user_confirmPassword,[Validators.required]),
    'email': new FormControl(this.user_email,[Validators.required]),
  })
  messages;
  edit() {
    // console.log(this.userId)
    if(this.formGroup.valid && this.formGroup.get('password').value == this.formGroup.get('confirmPassword').value) {
      console.log("user password matched")
      this.userService.editUser(this.userId,this.formGroup.value).subscribe(res => {
        console.log(res);
        this.messages = "user updated >>> successfully"
      })
    } else {
      console.log("not matched")
      this.messages = "user not updated !!!!"
    }
  }

  // deleting user
 removeUser() {
    this.userService.deleteUser(this.userId).subscribe(res => {
    console.log(res)
  })
}

  changedPassword() {
    this.changePassword = true;
  }
  doNotChange() {
    this.changePassword = false;
  }
}
