import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* istanbul ignore next */
  title = 'Book Rating';
  title2 = environment.texte.nameOfCustomer
}
