import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
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
    tap(() => this.poorMansLoadingIndicator = false)
  );

  // ANTI PATTERN!
  // obs$$.subscribe(obs$ => obs$.subscribe(book => console.log(book)))

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }

}
