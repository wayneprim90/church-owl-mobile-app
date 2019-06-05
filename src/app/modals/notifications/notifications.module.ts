import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { ComponentModule } from 'src/app/components/component.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
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
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
