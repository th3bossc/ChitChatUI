import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BotInfoComponent } from '../bot-info/bot-info.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-choose-bot',
  templateUrl: './choose-bot.component.html',
  styleUrls: ['./choose-bot.component.scss']
})
export class ChooseBotComponent implements OnInit {
  // ref : DynamicDialogRef;
  user_id : string;
  constructor(private activatedRoute : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.user_id = queryParam['user_id'];
    })
  }

  // ngOnDestroy(): void {
  //   if (this.ref)
  //     this.ref.close();
  // }

  dumbBotInfo() {
    // this.ref = this.dialogService.open(
    //   BotInfoComponent,
    //   {
    //     data : {
    //       bot : 'gpt',
    //       user_id : this.user_id
    //     },
    //     header : 'Conversational Bot (GPT-2)',
    //   }
    // );
    this.router.navigate(['chat', this.user_id], {queryParams : {botType : 'gpt'}});
  }

  smartBotInfo() {
    // this.ref = this.dialogService.open(
    //   BotInfoComponent,
    //   {
    //     data : {
    //       bot : 't5',
    //       user_id : this.user_id
    //     },
    //     header : 'Multi-task Bot (Flan T5)'
    //   }
    // );
    this.router.navigate(['chat', this.user_id], {queryParams : {botType : 't5'}});
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['']);
  }
}
