import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  @Input() audioURL;
  @Input() photoURL;
  @Input() loadAudio;

  @Output() audioCleared = new EventEmitter();

  constructor(private audioService: AudioService) { }

  ngOnInit() {
    if (this.loadAudio) {
      this.load();
    } else {
      this.audioURL = this.audioService.theAudioObj.audioURL;
      this.photoURL = this.audioService.theAudioObj.photoURL;
    }
  }

  load() {
    this.audioService.theAudioObj = {
      title: "Title",
      audioURL: this.audioURL,
      photoURL: this.photoURL
    }
    this.audioService.load();
  }

  play() {

  }

  stop() {

  }

  pause() {

  }

  clearAudio() {
    this.audioService.removeLoadedAudio();
    this.clearedAudio();
  }

  clearedAudio() {
    this.audioCleared.emit("Done");
  }

}
