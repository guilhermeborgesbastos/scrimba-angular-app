import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-async-observable-pipe',
    template: `<div><code>observable|async</code>:
    Time: {{ time | async }}</div>`
})

/*
 * The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted,
 * the pipe marks the component to be checked for changes. The following example binds the time observable to the component's view.
 * The observable continuously updates the view with the current time.
*/

export class AsyncObservablePipeComponent implements OnInit {
    
    constructor() {}

    time = new Observable<string>(observer => {
        setInterval(() => observer.next(new Date().toLocaleString('en-US', {hour12: false})), 1000);
      });

    ngOnInit() {
        
    }
}