import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  selectedItem: any;
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
  items: Array<{ title: string; note: string; icon: string }> = [];

  constructor() {
  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  goToDetails(): void {

  }

}
