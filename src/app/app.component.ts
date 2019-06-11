import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';

    constructor(private httpClient: HttpClient) {
    }
    kanye$ = timer(0, 5000)
        .pipe(switchMap(
            _ => this.httpClient
                .get('https://api.kanye.rest')
                .pipe(
                    map(kanye => kanye.quote)
                )
        ));
}
