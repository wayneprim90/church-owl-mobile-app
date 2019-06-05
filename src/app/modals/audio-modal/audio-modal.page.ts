import { Component, OnInit, Input} from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-audio-modal',
  templateUrl: './audio-modal.page.html',
  styleUrls: ['./audio-modal.page.scss'],
})
export class AudioModalPage implements OnInit {
  @Input() audioURL;
  @Input() photoURL;
  @Input() loadAudioOnPresented;
  
  constructor(private audioService: AudioService) {}

  ngOnInit() {
    if (this.loadAudioOnPresented) {
      this.load();
    }
  }

  load() {
    this.audioService.load(this.audioURL);
  }
}
