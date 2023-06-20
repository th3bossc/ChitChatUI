import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvoService } from '../Services/convo.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BotInfoComponent } from '../bot-info/bot-info.component';
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
  botType : string;
  @ViewChild('messsageWindow') pageBottom : ElementRef;
  screenWidth : number;
  showDialog : boolean;

  constructor(private activatedRoute : ActivatedRoute, 
    private chatService : ConvoService, 
    private router : Router,
    private dialogService : DialogService
  ) {}


  scrollDown() {
    this.pageBottom.nativeElement.scrollTo(0, this.pageBottom.nativeElement.scrollHeight);
  }


  ngAfterViewChecked(): void {
    console.log(this.pageBottom.nativeElement.scrollHeight);
    this.scrollDown();
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth; 
    this.showDialog = false;
    this.activatedRoute.params.subscribe((param) => {
      this.user_id = param['id'];
    });
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.botType = queryParam['botType'];
    });
    this.userInputForm = new FormGroup({
      inputText : new FormControl(null, [Validators.required])
    });
    this.messageSent = false;
  }

  onSent() {
    this.messages.push({type : 'user', content : this.userInputForm.value['inputText']});
    this.messageSent = true;
    
    if (this.botType === 't5')
      this.chatService.getComplexQuery({user : this.userInputForm.value['inputText']}).subscribe((data) => {
        this.messages.push({type : 'bot', content : data['reply']});
        this.messageSent = false;
      });
    else 
      this.chatService.getReply({user : this.userInputForm.value['inputText']}, this.user_id).subscribe((data) => {
        this.messages.push({type : 'bot', content : data['reply']});
        this.messageSent = false;
      });

    this.userInputForm.reset();
  }

  navigateBack() {
    this.router.navigate(['info'], {queryParams : {user_id : this.user_id}})
  }

  logout() {
    localStorage.removeItem('user_id');
    this.router.navigate(['']);
  }

  @HostListener('window:resize', ['$event'])  
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 1400)
    this.showDialog = false;
  }

  onShow() {

    this.showDialog = !this.showDialog;
  }
}
