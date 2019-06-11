import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';

    result: Array<number>;
    input: string;

    solution() {
        const arr = this.input.split(',').map(elem => +elem);

        // your solution here
        this.result = arr;
    }
}
