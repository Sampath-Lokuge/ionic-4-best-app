import { Injectable } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesDataService {

  quote: Quote;
  quotes: Quote[] = [];

  constructor() { }
}
