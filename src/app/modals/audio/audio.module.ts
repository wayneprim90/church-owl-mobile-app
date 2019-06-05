import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioPage } from './audio.page';
import { ComponentModule } from 'src/app/components/component.module';

const routes: Routes = [
  {
    path: '',
    component: AudioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [AudioPage]
})
export class AudioPageModule {}
