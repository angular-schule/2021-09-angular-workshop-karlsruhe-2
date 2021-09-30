import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {

  number$ = timer(0, 1000);
}
