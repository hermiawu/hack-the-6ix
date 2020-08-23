import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ResourceGuard } from './services/web/resource.guard';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { InfoBoardComponent } from './info-board/info-board.component';
import { RoommateListComponent } from './roommate-list/roommate-list.component';
import { HomeSetupComponent } from './home-setup/home-setup.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        data: { title: 'Logout' }
      },
      {
        path: 'chat',
        component: ChatComponent,
        data: { title: 'Chat' }
      },
      {
        path: 'board',
        component: InfoBoardComponent,
        data: { title: 'Info Board' }
      },
      {
        path: 'roomate',
        component: RoommateListComponent,
        data: { title: 'Roomate List' }
      },


    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [ResourceGuard],
        data: { title: 'login' }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [ResourceGuard],
        data: { title: 'Sign Up' }
      },
      {
        path: 'setup',
        component: HomeSetupComponent,
        canActivate: [ResourceGuard],
        data: { title: 'Home Setup' }
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
