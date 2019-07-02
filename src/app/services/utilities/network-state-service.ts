import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Network } from "@ionic-native/network/ngx";

@Injectable({
  providedIn: 'root'
})
export class NetworkStateService {

  private connectSubscription$: Subscription = null;

  constructor(private network: Network, ) { }

  WatchConnection() {
    if (this.connectSubscription$) { this.connectSubscription$.unsubscribe(); }
    this.connectSubscription$ = this.network.onDisconnect().subscribe(() => {
      this.showToastService.showNetworkStateErrorToast("Your internet seems to be down! Please check your network settings!");
      if (this.connectSubscription$) { this.connectSubscription$.unsubscribe(); }
      this.connectSubscription$ = this.network.onConnect().subscribe(() => {
        setTimeout(() => {
          this.showToastService.toast.dismiss();
          if (this.network.type === "wifi" || this.network.type === "4g" || this.network.type === "3g" || this.network.type === "2g" || this.network.type === "cellular" || this.network.type === "none") {
            this.showToastService.showNetworkStateSuccessToast("Internet connection available!");
            this.WatchConnection();
          }
        }, 3000);
      });
    });
  }

}
