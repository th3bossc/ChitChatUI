import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  constructor(private router : Router) {}
  visible = false;
  onLogin() {
    this.visible = true;
    this.router.navigate(['login']);
  }
  onRegister() {
    this.visible = true;
    this.router.navigate(['register'])
  }

  ngOnInit() {
    let loggedIn = localStorage.getItem('user_id')
    if (loggedIn)
      this.router.navigate(['info'], {queryParams : {user_id : loggedIn}});
  }
}
