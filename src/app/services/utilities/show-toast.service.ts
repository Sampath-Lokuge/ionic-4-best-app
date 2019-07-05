import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShowToastService {
  toast: HTMLIonToastElement;

  constructor(private toastCtrl: ToastController, ) { }

  async showNetworkStateErrorToast(data: string) {
    this.toast = await this.toastCtrl.create({
      message: data,
      position: 'bottom',
      color: 'danger'
    });
    this.toast.present();
  }

  async showNetworkStateSuccessToast(data: string, duration = 3000) {
    const toast = await this.toastCtrl.create({
      message: data,
      duration,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}
