import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from '../Services/auth.service';
import { AuthStatus } from '../Services/models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm : FormGroup;
  messages : Message[];
  registerStatus : AuthStatus;
  buttonLoading : boolean; 
  constructor(private router : Router, private authService : AuthService) {}

  ngOnInit(): void {
    this.buttonLoading = false;
    this.registerForm = new FormGroup({
      username : new FormControl(null, [Validators.maxLength(20), Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.minLength(8)]),
      confirm_password : new FormControl(null, [Validators.minLength(8)])
    });
  }


  onSubmit() {
    this.buttonLoading = true;
    if (this.registerForm.value['password'] == this.registerForm.value['confirm_password']) {
      this.authService.register({username : this.registerForm.value['username'], email : this.registerForm.value['email'], password : this.registerForm.value['password']}).subscribe((data) => {
        this.registerStatus = data;
        if (this.registerStatus['status'] == "User created successfully")
          this.router.navigate(['login'], {queryParams : {registered : 'true'}});
        else
          this.messages = [{ severity: 'error', summary: 'Uh Oh!', detail: this.registerStatus['status'] }];
        this.buttonLoading = false;
      }, () => {
        this.messages = [{ severity : 'error', summary : 'Oops!', detail : 'Something went wrong. Please try again later'}];
        this.buttonLoading = false;
      })
      this.registerForm.reset();
    }
    else  
      this.messages = [{ severity: 'error', summary: 'Uh Oh!', detail: "Passwords don't match" }];
  }
}
