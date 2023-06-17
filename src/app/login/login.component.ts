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
  constructor(private router : Router, private authService : AuthService, private activatedRouter : ActivatedRoute) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null),
      password : new FormControl(null)
    })
    this.activatedRouter.queryParams.subscribe((data) => {
      if (data['registered'] === "true")
        this.messages = [{ severity: 'success', summary: 'Hurray!', detail: 'Account created successfully. Please LogIn' }];
    });
  }

  onSubmit() {
    this.authService.login({email : this.loginForm.value['email'], password : this.loginForm.value['password']}).subscribe((data) => {
      this.loginStatus = data;
      console.log(data);
      if (this.loginStatus.user_id !== null) {
        this.router.navigate(['chat', this.loginStatus.user_id.toString()])
      }
      else {
        this.messages = [{ severity: 'error', summary: 'Uh Oh!', detail: this.loginStatus.status }];
      }
    })
    this.loginForm.reset(); 
  }
}
