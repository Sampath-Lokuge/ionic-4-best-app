import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpService: HttpService, ) { }

  get(category: string, count: number): Observable<any> {
    return this.httpService.get(`${environment.apiUrl}/?category=${category}&count=${count}`);
  }

}
