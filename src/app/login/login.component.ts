import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Message } from 'primeng/api';
import { AuthStatus } from '../Services/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  loginStatus : AuthStatus;
  messages : Message[];
  buttonLoading : boolean;
  constructor(private router : Router, private authService : AuthService, private activatedRouter : ActivatedRoute) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null)
    });
    this.activatedRouter.queryParams.subscribe((data) => {
      if (data['registered'] === "true")
        this.messages = [{ severity: 'success', summary: 'Hurray!', detail: 'Account created successfully. Please LogIn' }];
    });
  }

  onSubmit() {
    this.buttonLoading = true;
    this.authService.login({username : this.loginForm.value['username'], password : this.loginForm.value['password']}).subscribe((data) => {
      this.loginStatus = data;
      this.buttonLoading = false;
      if (this.loginStatus.user_id !== null) {
        localStorage.setItem('user_id', this.loginStatus['user_id'])
        this.router.navigate(['info'], {queryParams : {user_id : this.loginStatus['user_id']}});
      }
      else
        this.messages = [{ severity: 'error', summary: 'Uh Oh!', detail: this.loginStatus.status }];
    }, () => {
      this.messages = [{ severity : 'error', summary : 'Oops!', detail : 'Something went wrong. Please try again later'}]
        this.buttonLoading = false;
    })
    this.loginForm.reset(); 
  }
}
