import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';

    constructor(private httpClient: HttpClient) {
    }
    kanye$ = this
        .httpClient
        .get('https://api.kanye.rest')
        .pipe(
            map(kanye => kanye.quote)
        );
}
