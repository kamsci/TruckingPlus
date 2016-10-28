import { Component, Input, OnInit } from '@angular/core';

import { Job } from '../job.model';

@Component({
    selector: 'cl-job-tasks',
    templateUrl: './job-tasks.template.html'
})
export class JobTasksComponent implements OnInit {
    @Input() selectedJob: Job;

    ngOnInit() {
        console.log(this)
    }

    print() {
        console.log(this)
    }
}