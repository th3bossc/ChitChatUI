import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BotInfoComponent } from '../bot-info/bot-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-choose-bot',
  templateUrl: './choose-bot.component.html',
  styleUrls: ['./choose-bot.component.scss']
})
export class ChooseBotComponent implements OnInit {
  // ref : DynamicDialogRef;
  user_id : string;
  messages : Message[]
  constructor(private activatedRoute : ActivatedRoute, private router : Router, private authService : AuthService) {}

  ngOnInit(): void {
    
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.user_id = queryParam['user_id'];
      this.authService.getUserName(this.user_id).subscribe(data => this.messages = [{ severity: 'success', summary: 'Hello!', detail: `Welcome back ${data['username']}` }], () => this.messages = [{severity : 'error', summary : 'Oops!', detail : 'Something went wrong with the server. Please try again!'}])
    })
  }

  dumbBotInfo() {
    this.router.navigate(['chat', this.user_id], {queryParams : {botType : 'gpt'}});
  }

  smartBotInfo() {
    this.router.navigate(['chat', this.user_id], {queryParams : {botType : 't5'}});
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['']);
  }
}
