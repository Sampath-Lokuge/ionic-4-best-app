import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/api/quotes.service';
import { Quote } from 'src/app/models/quote';
import { forEach, } from "lodash";

@Component({
  selector: 'app-quotes',
  templateUrl: 'quotes.page.html',
  styleUrls: ['quotes.page.scss']
})
export class QuotesPage implements OnInit {
  quotes: Quote[] = [];

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.quotesService.get('famous', 5).subscribe((res: any) => {
      forEach(res, (q: any) => {
        this.quotes.push({
          quote: q.quote,
          author: q.author
        });
      });
    }, error => { console.log(error); });
  }

  goToDetails(): void {

  }

}
