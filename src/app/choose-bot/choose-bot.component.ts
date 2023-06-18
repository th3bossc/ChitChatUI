import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BotInfoComponent } from '../bot-info/bot-info.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-choose-bot',
  templateUrl: './choose-bot.component.html',
  styleUrls: ['./choose-bot.component.scss']
})
export class ChooseBotComponent implements OnInit, OnDestroy {
  ref : DynamicDialogRef;
  user_id : string;
  constructor(private dialogService : DialogService, private activatedRoute : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.user_id = queryParam['user_id'];
    })
  }

  ngOnDestroy(): void {
    if (this.ref)
      this.ref.close();
  }


  dumbBot() {
    console.log('i am dumb');
  }

  dumbBotInfo() {
    this.ref = this.dialogService.open(
      BotInfoComponent,
      {
        data : {
          bot : 'dumb',
          user_id : this.user_id
        },
        header : 'Conversational Bot (GPT-2)',
      }
    );
  }


  smartBot() {
    console.log('i am smart');
  }

  smartBotInfo() {
    this.ref = this.dialogService.open(
      BotInfoComponent,
      {
        data : {
          bot : 'smart',
          user_id : this.user_id
        },
        header : 'Multi-task Bot (Flan T5)'
      }
    );
  }

  logout() {
    this.router.navigate(['home']);
  }
}
