import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, shareReplay, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn!)),
  );

  // ANTI PATTERN!
  // obs$$.subscribe(obs$ => obs$.subscribe(book => console.log(book)))

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }

}
