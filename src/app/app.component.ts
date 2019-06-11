import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';
    even = null;

    source$ = interval(1000)
        .pipe(
            tap(number => {
                if (number % 2 === 0) {
                    this.even = number;
                }
            })
        );
}
