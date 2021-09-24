import { Component } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '111',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '222',
    title: 'AngularJs',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '333',
    title: 'React',
    description: 'Buch',
    rating: 2
  }];
}
