import { Component, OnInit, Input } from '@angular/core';
import { Media, MediaObject} from '@ionic-native/media/ngx';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})

export class AudioPage implements OnInit {

  @Input() audioURL;
  file : MediaObject;

  currentMediaLocation;
  
  constructor(private media : Media) {}

  ngOnInit() {
    this.playNew();
  }
  
  playNew() {
    this.file = null;
    this.file = this.media.create(this.audioURL);
    this.file.onStatusUpdate.subscribe(status => {
      console.log("New Status: " + status);
    })
    this.file.play();
  }

  stop() {
    this.file.stop();
  }
  
}
