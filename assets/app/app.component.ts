import { Component } from '@angular/core';

import { JobsComponent } from './jobs/jobs.component';
import { JobService } from './jobs/job.service';

@Component({
    selector: 'cl-app',
    templateUrl: './app.template.html',
    styleUrls: ['./app.component.css'],
    providers: [ JobsComponent, JobService ]
})
export class AppComponent {

}