import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceModule } from './services/service.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { GridsterModule } from 'angular-gridster2';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeComponent } from './home/home.component';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RoommateListComponent } from './roommate-list/roommate-list.component';
import { InfoBoardComponent } from './info-board/info-board.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeSetupComponent } from './home-setup/home-setup.component';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { RoomItemComponent } from './room-item/room-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    HomeComponent,
    BottomTabComponent,
    LogoutComponent,
    ChatComponent,
    RoommateListComponent,
    InfoBoardComponent,
    SignUpComponent,
    HomeSetupComponent,
    WelcomeDialogComponent,
    RoomItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    EmojiModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
