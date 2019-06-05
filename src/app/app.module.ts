import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsPageModule } from './modals/notifications/notifications.module';
import { AudioPageModule } from './modals/audio/audio.module';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from "@ionic-native/file/ngx";
import { Media } from "@ionic-native/media/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NotificationsPageModule, AudioPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    Media,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
