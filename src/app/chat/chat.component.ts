import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ConvoService } from '../Services/convo.service';

export interface message {
  type : 'user' | 'bot',
  content : string
};


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked, OnInit {

  messages : message[] = [];
  userInputForm : FormGroup;
  messageSent : boolean;
  user_id : string = null;
  @ViewChild('window') pageBottom : ElementRef;

  constructor(private activatedRoute : ActivatedRoute, private chatService : ConvoService) {}

  ngAfterViewChecked(): void {
    this.pageBottom.nativeElement.scrollTop = this.pageBottom.nativeElement.scrollHeight;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.user_id = param['id'];
    });
    this.userInputForm = new FormGroup({
      inputText : new FormControl(null, [Validators.required])
    });
    this.messageSent = false;
  }

  onSent() {
    this.messages.push({type : 'user', content : this.userInputForm.value['inputText']});
    this.messageSent = true;
    this.chatService.getReply({user : this.userInputForm.value['inputText']}, this.user_id).subscribe((data) => {
      this.messages.push({type : 'bot', content : data['reply']});
      this.messageSent = false;
    })
    this.userInputForm.reset();
  }


}
