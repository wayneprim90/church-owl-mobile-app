import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { NotificationsPageModule } from '../modals/notifications/notifications.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentModule { }
