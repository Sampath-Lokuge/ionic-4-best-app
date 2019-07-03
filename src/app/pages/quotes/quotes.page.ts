import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/api/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: 'quotes.page.html',
  styleUrls: ['quotes.page.scss']
})
export class QuotesPage implements OnInit {
  /*   selectedItem: any;
    icons = [
      'flask',
      'wifi',
      'wifi',
      'football',
      'basketball',
      'paper-plane',
      'american-football',
      'boat',
      'bluetooth',
      'build'
    ];
    items: Array<{ title: string; note: string; icon: string }> = []; */

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.quotesService.get('famous', 10).subscribe((res: any) => {
      console.log(res);
    }, error => { console.log(error); });
  }

  goToDetails(): void {

  }

}
