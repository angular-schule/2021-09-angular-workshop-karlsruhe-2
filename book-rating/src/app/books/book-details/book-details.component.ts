import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  poorMansLoadingIndicator = false;

  book$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    tap(() => this.poorMansLoadingIndicator = true),
    switchMap(isbn => this.bs.getSingleBook(isbn!).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => of({
        title: 'ERROR',
        description: err.message,
        rating: -1
      }))
    )),
    tap(() => this.poorMansLoadingIndicator = false),
  );

  // ANTI PATTERN!
  // obs$$.subscribe(obs$ => obs$.subscribe(book => console.log(book)))

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }

}
