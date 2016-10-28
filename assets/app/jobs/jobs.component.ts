import { Component } from '@angular/core';

import { Job } from './job.model';
import { JobListComponent } from './job-list/job-list.component';
import { JobTasksComponent } from './job-tasks/job-tasks.component';

@Component({
    selector: 'cl-jobs',
    templateUrl: './jobs.template.html',
    styleUrls: ['./jobs.style.css'],
    providers: [ JobListComponent, JobTasksComponent ]
})
export class JobsComponent {
    selectedJob: Job;

    // allFilter() {

    // }

    // activeFilter() {

    // }

    // completeFilter() {

    // }
}