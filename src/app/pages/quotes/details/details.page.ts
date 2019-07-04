import { Component, OnInit } from '@angular/core';
import { QuotesDataService } from 'src/app/services/data/quotes-data.service';
import { Quote } from 'src/app/models/quote';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private quotesDataService: QuotesDataService, ) { }

  quote: Quote;

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.quote = this.quotesDataService.quote;
  }

}
