import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-bottom-tab></app-bottom-tab>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class HomeLayoutComponent { }
