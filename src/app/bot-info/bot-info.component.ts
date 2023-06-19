import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-bot-info',
  templateUrl: './bot-info.component.html',
  styleUrls: ['./bot-info.component.scss']
})
export class BotInfoComponent implements OnInit {
  ref : DynamicDialogRef | undefined;
  constructor(private dialogConfig : DynamicDialogConfig, private router : Router) {}
  botType : string;
  user_id : string;
  ngOnInit() {
    this.botType = this.dialogConfig.data['bot'];
    this.user_id = this.dialogConfig.data['user_id'];
  }

  goToChat() {
    this.router.navigate(['chat', this.user_id], {queryParams : {botType : this.botType}});
  }

}
