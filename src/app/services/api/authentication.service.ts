import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/models/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpService) { }

  login(userInfo: UserInfo): Observable<any> {
    return this.httpService.post(`${environment.apiUrl}`, { userInfo });
  }

  signup() {

  }

  forgotPassword() {

  }

  logout() {

  }
}
