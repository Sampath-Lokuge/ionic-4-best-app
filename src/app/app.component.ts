import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkStateService } from './services/utilities/network-state-service';
import { LocalStorageService } from './services/utilities/local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Quotes',
      url: '/quotes',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'log-out'
    }
  ];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private networkStateService: NetworkStateService,
              private localStorageService: LocalStorageService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    if (this.platform.is('cordova')) {
      this.networkStateService.WatchConnection();
    }
  }

  logout(p: any) {
    if (p.title === 'Logout') {
      this.localStorageService.clear();
    }
  }
}
