import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 2. Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: string) => this.log('ERROR' + err),
      complete: () => this.log('✅ COMPLETED')
    }

    // 1. Observable    (ABC|)
    // const observable = of('😆', '🤪', '😎');

    // 1. Observable     A---C---|
    //                   last
    //                   --------C
    const observable = new Observable<string>(subscriber => { // 3. Subscriber

      subscriber.next('😎');

      const x = setTimeout(() => {
        subscriber.next('😇');
        this.log('ZOMBIE CODE!')
      }, 2000);

      const y = setTimeout(() => {
        subscriber.error('Dumm gelaufen!');
        this.log('ZOMBIE CODE 222!')
      }, 2000);

      // obs.error('BOOH!');
      // obs.complete();

      return () => {
        this.log('Es wurde unsubscribed!');
        clearTimeout(x);
        clearTimeout(y);
      }
    });

    // 4. Subscription
    const subscription = observable.subscribe(observer)
    setTimeout(() => subscription.unsubscribe(), 1000);



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
