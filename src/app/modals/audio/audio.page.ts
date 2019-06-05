import { Component, OnInit, Input } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { Media, MediaObject } from "@ionic-native/media/ngx";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})

export class AudioPage implements OnInit {

  @Input() photo;
  @Input() audio;
  audioName : string;
  exists = false;
  fileTransferObj : FileTransferObject; 
  message;
  mediaObj;

  constructor(private transfer: FileTransfer, private file : File, private media : Media) {
    this.fileTransferObj = this.transfer.create();
  }

  ngOnInit() {
    this.audioName = this.audio.split("/")[this.audio.split("/").length - 1]
    
    this.file.checkFile(this.file.dataDirectory, this.audioName).then(_ => {

      this.exists = true;
      this.mediaObj = this.media.create(this.file.dataDirectory + this.audioName);

    }).catch(err => {
      this.exists = false;
    })

    this.mediaObj.onError.subscribe(err => {
      console.log(err)
    })
    
  }

  download() {
    this.fileTransferObj.download(this.audio, this.file.dataDirectory + this.audioName).then(entry => {
      this.message = "Downloaded @ " + entry.toURL()
    })
  } 

  play() {
    this.mediaObj.play();
  }
}
