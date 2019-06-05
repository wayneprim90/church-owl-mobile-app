import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";
import {} from "@ionic/angular"
import { NotificationsPage } from 'src/app/modals/notifications/notifications.page';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() scrolled;
  @Input() modal;
  
  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  async openNotificationModal() {
    const modal = await this.modalCtrl.create({
      component: NotificationsPage
    })
    return await modal.present();
  }

  closeNotificationsModal() {
    this.modalCtrl.dismiss();
  }
}
