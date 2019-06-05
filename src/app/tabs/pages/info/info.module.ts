import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoPage } from './info.page';
import { ComponentModule } from 'src/app/components/component.module';

const routes: Routes = [
  {
    path: '',
    component: InfoPage
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
  declarations: [InfoPage]
})
export class InfoPageModule {}
