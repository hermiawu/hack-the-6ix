import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  inMemoryToken: string;

  isLogin = false;
  signedUser = new User();
  signedCredential: string;

  constructor() { }

  inMemoryLogin(username: string, password: string): void {
    if (username === this.signedUser.name && password === this.signedCredential) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
  }

  inMemorySignUp(username: string, email: string, password: string): void {
    this.signedCredential = password;
    this.signedUser = {
      userId: 1,
      name: username,
      profilePath: 'assets/svgs/profile1.svg',
      status: 'free',
      email: email,
      tags: ['kind']
    };
    this.isLogin = true;

  }

  getCurrentUser(): User {
    return this.signedUser;
  }
}
