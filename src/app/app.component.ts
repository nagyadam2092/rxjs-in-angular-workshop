import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';

    source$ = interval(1000)
        .pipe(
            filter(elem => elem % 2 === 0),
            map(elem => elem * 10)
        );
}
