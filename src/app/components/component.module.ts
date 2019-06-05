import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { AudioPlayerComponent } from './ui/audio-player/audio-player.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    AudioPlayerComponent
  ]
})
export class ComponentModule { }
