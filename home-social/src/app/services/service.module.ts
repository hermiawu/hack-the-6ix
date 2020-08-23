import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { HttpClientHelperService } from './web/http-client-helper.service';
import { HomeService } from './home/home.service';
import { RoomService } from './room/room.service';
import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    HttpClientHelperService,
    RoomService,
    HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ServiceModule { }
