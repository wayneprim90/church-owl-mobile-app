import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { SermonsService } from 'src/app/services/sermons.service';
import { AudioPage } from 'src/app/modals/audio/audio.page';

@Component({
  selector: 'app-home',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})

export class SermonsPage implements OnInit {
  
  scrolled = false;

  pastSermons = [];
  recentSermons = [];

  slideOpts = {
    speed: 1000,
    autoPlay: {
      delay: 1000
    }
  }

  constructor(private sermonsService : SermonsService, private modalCtrl : ModalController) {
    this.pastSermons = this.sermonsService.sermons.slice(2, this.sermonsService.sermons.length);
    this.recentSermons = this.sermonsService.sermons.slice(0,2);
  }

  ngOnInit() {

  }

  async openAudioModal(photo, audio) {
    const modal = await this.modalCtrl.create({
      component: AudioPage,
      componentProps: {
        photo: photo,
        audio: audio
      }
    })
    return await modal.present();
  }

  contentScrolled(event) {
    if (event.detail.scrollTop > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  slidesLoaded(slider) {
    slider.startAutoplay();
  }

}
