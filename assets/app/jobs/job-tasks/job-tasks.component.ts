import { Component, Input } from '@angular/core';

import { Job } from '../job.model';

@Component({
    selector: 'cl-job-tasks',
    templateUrl: './job-tasks.template.html'
})
export class JobTasksComponent {
    @Input() selectedJob: Job;

    constructor() {
        console.log(this.selectedJob);
    }
}