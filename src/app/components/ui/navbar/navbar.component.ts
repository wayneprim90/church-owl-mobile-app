import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";
import {} from "@ionic/angular"
import { NotificationsPage } from 'src/app/modals/notifications/notifications.page';
import { AudioService } from 'src/app/services/audio.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() scrolled;
  @Input() modal;

  hasAudioLoaded : Observable<boolean>;

  constructor(private modalCtrl : ModalController, private audioService : AudioService) { 
    this.hasAudioLoaded = this.audioService.audioLoaded.pipe(map(a => {
      return a
    }))
  }

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
