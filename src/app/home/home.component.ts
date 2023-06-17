import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router : Router) {}
  visible = false;
  onLogin() {
    this.visible = true;
    this.router.navigate(['home', 'login']);
  }
  onRegister() {
    this.visible = true;
    this.router.navigate(['home', 'register'])
  }
}
