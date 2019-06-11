import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-person',
    templateUrl: './app.person.component.html',
    styles: []
})
export class AppPersonComponent {
    @Input() person: any;
}
