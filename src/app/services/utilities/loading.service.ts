import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController, ) { }

  async presentLoader(message = 'Please wait...', duration = 1000): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingCtrl.create({
      message,
      duration
    });
    loader.present();
    return loader;
  }

  dismissLoader(loader: HTMLIonLoadingElement): Promise<boolean> {
    if (loader) { return loader.dismiss(); }
  }
}
