import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'books' }
  { path: 'books',
    loadChildren: () => import('./books/books.module')
      .then(m => m.BooksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    scrollPositionRestoration: 'top' // später: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
