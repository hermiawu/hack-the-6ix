import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  hide = true;
  loginInvalid: boolean;
  color = '#A4CAED';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginInvalid = false;

    const correctUser = 'user';
    const correctPassword = '123456';
    if (this.username === correctUser && this.password === correctPassword) {
      this.router.navigate(['/home']);
    }
    else {
      this.loginInvalid = true;
    }
  }

}
