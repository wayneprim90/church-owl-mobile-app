import { Component, OnInit } from '@angular/core';
import { SermonsService } from 'src/app/services/sermons.service';
import { ModalController } from '@ionic/angular';
import { AudioModalPage } from 'src/app/modals/audio-modal/audio-modal.page';

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
    speed: 3000
  }

  constructor(private sermonsService : SermonsService, private modalCtrl : ModalController) {
    this.pastSermons = this.sermonsService.sermons.slice(2, this.sermonsService.sermons.length);
    this.recentSermons = this.sermonsService.sermons.slice(0,2);
  }

  ngOnInit() {}

  slidesLoaded(slider) {
    slider.startAutoplay();
  }

  async displayAudioModal(audioURL, photoURL) {
    
    const m = await this.modalCtrl.create({
      component: AudioModalPage,
      componentProps: {
        loadAudio: true,
        audioURL: audioURL,
        photoURL: photoURL
      }
    })
    return await m.present();
  }

}
