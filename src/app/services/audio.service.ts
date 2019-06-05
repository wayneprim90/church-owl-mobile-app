import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

interface AudioObject {
  title: string,
  audioURL: string,
  photoURL: string
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audioLoaded : Subject<boolean> = new Subject<boolean>();

  theAudioObj : AudioObject;

  constructor() { 
    this.audioLoaded.next(false);
  }

  load() {
    this.audioLoaded.next(true)
  }

  removeLoadedAudio() : boolean{
    this.audioLoaded.next(false);
    this.theAudioObj = null;
    return true;
  }
}  
