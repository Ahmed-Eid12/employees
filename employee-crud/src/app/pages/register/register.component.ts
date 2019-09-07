import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) {}
 
  /**
    custome validation for email
  */
   emailDomainValidator(control: FormControl) {
    let email = control.value; (2)
    if (email && email.indexOf("@") != -1) {
      let [_, domain] = email.split("@"); 
      if (domain !== "gmail.com") { 
        return {
          emailDomain: {
            parsedDomain: domain
          }
        }
      }
    }
    return null; 
  }
  // form group validation to get or save users
  formGroup = new FormGroup({
    'userName': new FormControl(null,[Validators.required]),
    'firstName': new FormControl(null,[Validators.required]),
    'lastName': new FormControl(null,[Validators.required]),
    'password': new FormControl(null,[Validators.required,Validators.minLength(5)]),
    'confirmPassword': new FormControl(null,[Validators.required,Validators.minLength(5)]),
    'email': new FormControl(null,[Validators.required,
                                   Validators.pattern("[^ @]*@[^ @]*"),
                                   this.emailDomainValidator]),
  })
  allUsers
  
  error
  ngOnInit() {
    this.userService.getUsers().subscribe(data =>{
      this.allUsers = data
      
    })
  }
  messages;
  register() {
    if(this.formGroup.dirty && this.formGroup.valid && this.formGroup.get('password').value === this.formGroup.get('confirmPassword').value) {
      console.log("equals")
    
      // ===============
      this.allUsers.find(data =>{
        if(this.formGroup.get('email').value === data.email) {
          this.error = "email '" + this.formGroup.get('email').value + "' is already exsits";
          this.messages="user not saved .... "
        }
        
      })
      //======================
      this.userService.save(this.formGroup.value).subscribe((res) => {
        console.log(res)
        this.messages = "user saved successfully ...."
      })
      this.formGroup.get('userName').setValue('')
      this.formGroup.get('firstName').setValue('')
      this.formGroup.get('lastName').setValue('')
      this.formGroup.get('password').setValue('')
      this.formGroup.get('confirmPassword').setValue('')
      this.formGroup.get('email').setValue('')

      
    } else {
      console.log("not equals")
      console.log(this.formGroup.errors);
      this.messages="user not saved .... "
    }
    this.userService.getLogin.next(this.allUsers)
  }
}
  

