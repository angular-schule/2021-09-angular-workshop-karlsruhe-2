import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { delay, share, shareReplay } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Subject<number>; // später: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {

    /**************!!**************/

    /*
    this.measureValues$ = this.mvs.getValues().pipe(
      // share(),
      shareReplay(1)
    )
    */

    this.measureValues$ = new BehaviorSubject<number>(999);
    this.mvs.getValues().pipe(
      delay(3000)
    ).subscribe(this.measureValues$)

    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
