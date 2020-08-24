import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  currentUser: User;
  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

}
