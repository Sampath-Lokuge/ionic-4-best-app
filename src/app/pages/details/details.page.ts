import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/api/quotes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.quotesService.get('famous', 10).subscribe((res: any) => {
      console.log(res);
    }, error => { console.log(error); });
  }


}
