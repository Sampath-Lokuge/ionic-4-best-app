import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(url: string, params: any, contentType = 'application/json'): Observable<any> {
    return this.http.post(url, params, this.createHeader(contentType));
  }

  get(url: string, contentType = 'application/json'): Observable<any> {
    return this.http.get(url, this.createHeader(contentType));
  }

  private createHeader(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType, 'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com', 'X-RapidAPI-Key': 'f615d2444fmsh4c5143d15bbc0ddp17a682jsn57f34d82978e'
      })
    };
  }


}
