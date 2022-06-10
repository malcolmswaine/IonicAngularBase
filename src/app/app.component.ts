import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Messages', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Appointments', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Family', url: '/folder/Favorites', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
