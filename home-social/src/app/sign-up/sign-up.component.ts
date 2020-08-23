import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  hide = true;
  isFemale = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectMale(): void {
    this.isFemale = false;

  }

  selectFemale(): void {
    this.isFemale = true;
  }

  login(): void {
    this.router.navigate(['/home']);
  }

}
