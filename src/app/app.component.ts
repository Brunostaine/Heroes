import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'dashboard',
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      toolTipText: 'heroes',
    },
  ];
}
