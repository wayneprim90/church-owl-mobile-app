import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-audio-modal',
  templateUrl: './audio-modal.page.html',
  styleUrls: ['./audio-modal.page.scss'],
})
export class AudioModalPage implements OnInit {
  
  @Input() loadAudio;
  @Input() audioURL;
  @Input() photoURL;
  
  constructor(private modalCtrl : ModalController) {}

  ngOnInit() {
    
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
