import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {NotificationsService} from '../notifications.service';

declare var cordova: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
      private platform: Platform,
      public _notification: NotificationsService
  ) {}

  ngOnInit(): void {
    this.platform.ready().then(() => {
      cordova.plugins.notification.local.on('stop', () => {
        cordova.plugins.notification.local.cancel(1, () => {}, {});
      });
    });
  }
}
