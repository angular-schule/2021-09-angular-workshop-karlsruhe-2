import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// 2.
// @Component({
//   selector: 'br-dashboard',
//   template: ''
// })
// export class DummyDashboardComponent {
// }


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        // DashboardComponent, BookComponent, StarRatingPipe --> 1. Integration Test
        // DummyDashboardComponent --> 2. Unittest
      ],
      schemas: [NO_ERRORS_SCHEMA] // --> 3. Shallow Unit Test
    }).compileComponents();
  });

  it(`should have as title 'Book Rating'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Book Rating');
  });
});
