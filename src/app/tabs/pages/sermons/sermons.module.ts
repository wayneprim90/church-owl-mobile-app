import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SermonsPage } from './sermons.page';
import { ComponentModule } from 'src/app/components/component.module';

const routes: Routes = [
  {
    path: '',
    component: SermonsPage
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
  declarations: [SermonsPage]
})
export class SermonsPageModule {}
