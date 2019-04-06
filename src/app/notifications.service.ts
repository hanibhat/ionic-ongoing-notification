import { Injectable } from '@angular/core';

declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  enableNotification() {
    cordova.plugins.notification.local.schedule({
      id: 1,
      title: 'Hello world!',
      actions: [
        { id: 'stop',  title: 'Stop', type: 'button' }
      ],
      ongoing: true,
    });
  }
}
