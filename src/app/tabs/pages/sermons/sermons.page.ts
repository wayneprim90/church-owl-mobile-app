import { Component, OnInit } from '@angular/core';
import { SermonsService } from 'src/app/services/sermons.service';
import { ModalController } from '@ionic/angular';
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

  async displayAudioModal(audioURL) {
    console.log(audioURL)
    const m = await this.modalCtrl.create({
      component: AudioPage,
      componentProps: {
        audioURL: audioURL
      }
    })
    return await m.present();
  }

}
