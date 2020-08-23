import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  currentUser: User;
  ngOnInit(): void {
    this.currentUser = {
      name: 'Hermia',
      profilePath: '../../assets/svgs/profile1.svg',
      email: 'hermia@home.com',
      tags: [
        'humor',
        'kind'
      ],
      status: 'work'
    };
  }

}
