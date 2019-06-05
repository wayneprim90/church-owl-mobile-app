import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audioLoaded : Subject<boolean> = new Subject<boolean>();

  constructor() { 
    this.audioLoaded.next(false);
  }

  load(audioUrl : string, imageUrl? : string) {
    this.audioLoaded.next(true)
  }
}  
