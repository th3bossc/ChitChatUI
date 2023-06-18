import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { BotInfoComponent } from './bot-info/bot-info.component';
import { ChooseBotComponent } from './choose-bot/choose-bot.component';
import { AuthService } from './Services/auth.service';
import { ConvoService } from './Services/convo.service';
import { AutoFocusModule } from 'primeng/autofocus';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    ChooseBotComponent,
    BotInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    //primeng
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
    DialogModule,
    MessagesModule,
    DynamicDialogModule,
    CardModule,
    PanelModule,
    AutoFocusModule 
  ],
  providers: [AuthService, ConvoService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
