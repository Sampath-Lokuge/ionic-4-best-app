import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info';
import { LocalStorageService } from '../utilities/local-storage.service';
import { LocalStorage } from 'src/app/constants/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private localStorageService: LocalStorageService) { }

  canActivate(): Promise<boolean> {
    return new Promise(async resolve => {
      const userInfo: UserInfo = await this.localStorageService.get(LocalStorage.USER_INFO);
      if (userInfo) {
        return resolve(true);
      }
      this.router.navigate(['/login']);
      return resolve(false);
    });
  }

}
