import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Job } from '../job.model';
import { JobService } from '../job.service';
import { JobItemComponent } from './job-item/job-item.component';

@Component({
    selector: 'cl-job-list',
    templateUrl: './job-list.template.html',
    providers: [ JobItemComponent ]
})
export class JobListComponent implements OnInit{
    jobs: Job[];

    @Output() jobSelected = new EventEmitter<Job>();

    constructor(private jobService: JobService) {}

    ngOnInit () {
        // Populate job list on load
        this.jobService.getJobs()
            .subscribe(
                jobs => {
                    this.jobs = jobs;
                    this.jobService.jobs = jobs;
                }
            )
    }
}