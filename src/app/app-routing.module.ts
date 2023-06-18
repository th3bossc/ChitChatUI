import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChooseBotComponent } from './choose-bot/choose-bot.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent, children : [
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent}
  ], data : {
    animation : 'slideUp'
  }},
  {path : 'info', component : ChooseBotComponent},
  {path : 'chat/:id', component : ChatComponent},
  {path : 'debug', component : ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
