import { Component } from '@angular/core';

import { JobsComponent } from './jobs/jobs.component';

@Component({
    selector: 'cl-app',
    templateUrl: './app.template.html',
    styleUrls: ['./app.component.css'],
    providers: [ JobsComponent ]
})
export class AppComponent {

}