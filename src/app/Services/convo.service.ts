import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatData, ChatReply } from './models';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConvoService {
  apiUrl : string = 'https://Th3BossC-ChitChat.hf.space/chat/'
  // apiUrl : string = 'http://127.0.0.1:5000/chat/'
  constructor(private http : HttpClient) { }

  getReply(userInput : ChatData, user_id : string) : Observable<ChatReply> {
    return this.http.post<ChatReply>(this.apiUrl + user_id, userInput);
  }
}
