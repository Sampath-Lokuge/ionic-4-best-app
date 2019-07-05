import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/api/quotes.service';
import { forEach, } from 'lodash';
import { LoadingService } from 'src/app/services/utilities/loading.service';
import * as moment from 'moment';
import { QuotesDataService } from 'src/app/services/data/quotes-data.service';
import { Router } from '@angular/router';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: 'quotes.page.html',
  styleUrls: ['quotes.page.scss']
})
export class QuotesPage implements OnInit {
  quotes: Quote[] = [];
  date: string = moment().format('dddd, MMMM Do YYYY');

  constructor(private quotesService: QuotesService,
    private loadingService: LoadingService,
    private quotesDataService: QuotesDataService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
    const loading = await this.loadingService.presentLoader();

    this.quotesService.get('famous', 5).subscribe((res: any) => {
      forEach(res, (q: any) => {
        this.quotes.push({
          quote: q.quote,
          author: q.author
        });
      });
    }, error => { console.log(error); },
      () => { this.loadingService.dismissLoader(loading); });
  }

  goToDetails(data: Quote): void {
    this.quotesDataService.quote = data;
    this.router.navigateByUrl('/details');
  }

}
