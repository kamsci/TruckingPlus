import { Component } from '@angular/core';

import { Job } from './job.model';
import { JobListComponent } from './job-list/job-list.component';
import { JobTasksComponent } from './job-tasks/job-tasks.component';

@Component({
    selector: 'cl-jobs',
    templateUrl: './jobs.template.html',
    providers: [ JobListComponent, JobTasksComponent ]
})
export class JobsComponent {
    selectedJob: Job;

    constructor() {
        console.log("JobCom", this.selectedJob);
    }



}