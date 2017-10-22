import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuggestedMatchesComponent } from './suggested-matches/suggested-matches.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MessageComponent } from './message/message.component';
import { OneSuggestedMatchComponent } from './one-suggested-match/one-suggested-match.component';
import {HttpRequestsService} from './httpRequests.service'
import {HttpModule} from '@angular/http';
import { OneConnectionComponent } from './one-connection/one-connection.component';
import { OneReceivedComponent } from './one-received/one-received.component';
import { OneSentComponent } from './one-sent/one-sent.component';
import { SignupComponent } from './signup/signup.component';
import { OneChatMessageComponent } from './one-chat-message/one-chat-message.component'
const appRoutes: Routes= [
  {path : 'matches', component : SuggestedMatchesComponent },
  {path : 'connections', component : ConnectionsComponent },
  {path : 'lesson', component : MessageComponent },
  {path : 'signup', component : SignupComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuggestedMatchesComponent,
    ConnectionsComponent,
    MessageComponent,
    OneSuggestedMatchComponent,
    OneConnectionComponent,
    OneReceivedComponent,
    OneSentComponent,
    SignupComponent,
    OneChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [HttpRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
