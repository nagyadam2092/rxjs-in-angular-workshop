import { Component, Input } from '@angular/core';
import { interval, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';

const people = [
    {
        'id': 'd1cac6c9-c081-4942-a134-c00fc2c6c4de',
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Erika',
            'last': 'Barry'
        }
    },
    {
        'id': '10a22070-4bd0-4956-9bdd-85b0eafa5295',
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Krystal',
            'last': 'Bishop'
        }
    },
    {
        'id': '102740d8-fba0-493b-b3b6-baa770e58a4e',
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Celeste',
            'last': 'Witt'
        }
    },
    {
        'id': '79d6fcbd-966c-4054-8fc3-601ea98ba03f',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Luisa',
            'last': 'Copeland'
        }
    },
    {
        'id': '768ad898-b6a1-4086-a470-1cce1bbfa0f1',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Perry',
            'last': 'Obrien'
        }
    },
    {
        'id': '00da2957-58fb-41d1-bb5a-589e223328ef',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Judy',
            'last': 'David'
        }
    },
    {
        'id': '4db3ad86-20a0-48b3-96db-1188bf0198cc',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Santos',
            'last': 'English'
        }
    },
    {
        'id': '4b666af2-795a-4447-a71f-301787f04b36',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Bryan',
            'last': 'Horne'
        }
    },
    {
        'id': '0e4dc3c6-111c-4507-8414-67b73d702e1a',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Lambert',
            'last': 'Hayden'
        }
    },
    {
        'id': 'fde58840-7eb0-44c6-8d1b-351e6fe4f0ea',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Judith',
            'last': 'Perez'
        }
    },
    {
        'id': '19d1012b-87d7-4302-990a-94bec8ebf06d',
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Cleo',
            'last': 'Myers'
        }
    },
    {
        'id': '99473347-130d-47ad-a711-54fffb0e5df9',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Blair',
            'last': 'Hayes'
        }
    },
    {
        'id': '237c77e4-fce7-4b09-b39d-bb5a6494f938',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Ernestine',
            'last': 'Talley'
        }
    },
    {
        'id': 'a786d1de-cfdf-4f2d-b856-ad500e3b4bdd',
        'isActive': false,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Viola',
            'last': 'Ochoa'
        }
    },
    {
        'id': '7f67e536-3d66-4398-b102-dc2e7fcb9947',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Holder',
            'last': 'Leach'
        }
    },
    {
        'id': 'cf31304d-6a66-462e-b8fa-c60ec7ef4aa3',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Walls',
            'last': 'Mullins'
        }
    },
    {
        'id': 'b68abeaf-424e-4c0b-b030-95dd3d057311',
        'isActive': true,
        'picture': 'http://placehold.it/32x32',
        'name': {
            'first': 'Jessica',
            'last': 'Lancaster'
        }
    }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-rxjs-workshop';

    people$ = interval(1000).pipe(
        map(_ => people[Math.floor(Math.random() * people.length)])
    );
}
