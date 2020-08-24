import { Component, OnInit, Inject } from '@angular/core';
import { SetupItem } from '../models/setup-item';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from '../welcome-dialog/welcome-dialog.component';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home-setup',
  templateUrl: './home-setup.component.html',
  styleUrls: ['./home-setup.component.scss']
})
export class HomeSetupComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  setupItems: SetupItem[] = [
    {
      name: 'Roomates',
      imagePath: '../../assets/svgs/roomates.svg',
      amount: 0
    },
    {
      name: 'Bedroom',
      imagePath: '../../assets/svgs/bedroom.svg',
      amount: 0
    },
    {
      name: 'Living Room',
      imagePath: '../../assets/svgs/livingroom.svg',
      amount: 0
    },
    {
      name: 'Kitchen Room',
      imagePath: '../../assets/svgs/kitchen.svg',
      amount: 0
    },
    {
      name: 'Laundry Room',
      imagePath: '../../assets/svgs/laundry.svg',
      amount: 0
    },
    {
      name: 'Other',
      imagePath: '../../assets/svgs/other_study.svg',
      amount: 0
    }
  ];

  ngOnInit(): void {
    console.log('home');
    const userName = this.authService.getCurrentUser().name;
    this.dialog.open(WelcomeDialogComponent, {
      panelClass: 'welcome-dialog',
      data: { name: userName }
    });
  }

  increaseItem(item: SetupItem): void {
    if (item.amount < 10) {
      item.amount++;
    }
  }

  decreaseItem(item: SetupItem): void {
    if (item.amount > 0) {
      item.amount--;
    }
  }

}

