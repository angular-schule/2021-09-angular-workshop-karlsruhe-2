import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, mergeMap, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
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
    switchMap(isbn => this.bs.getSingleBook(isbn!)),
    tap(() => this.poorMansLoadingIndicator = false),
    catchError((err: HttpErrorResponse) => of({
      title: 'ERROR',
      description: err.message,
      rating: -1
    }))
  );

  // ANTI PATTERN!
  // obs$$.subscribe(obs$ => obs$.subscribe(book => console.log(book)))

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }

}
