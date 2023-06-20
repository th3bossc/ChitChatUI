import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { AuthData, AuthStatus } from './models';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl : string = 'https://Th3BossC-ChitChat.hf.space/'
  // apiUrl : string = 'http://127.0.0.1:5000/'
  constructor(private http : HttpClient) {}

  getUserName(user_id : string) : Observable<{'username' : string}> {
    const params = new HttpParams().set('user_id', user_id);
    return this.http.get<{'username' : string}>(this.apiUrl + 'login', {params : params});
  }

  login(userData : AuthData) : Observable<AuthStatus> {
    return this.http.post<AuthStatus>(this.apiUrl + 'login', userData);
  }

  register(userData : AuthData) : Observable<AuthStatus> {
    return this.http.post<AuthStatus>(this.apiUrl + 'register', userData);
  }

}
