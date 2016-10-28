import { Component, Input, OnInit } from '@angular/core';

import { Job } from '../job.model';

@Component({
    selector: 'cl-job-tasks',
    templateUrl: './job-tasks.template.html',
    styleUrls: [ './job-tasks.style.css' ]
})
export class JobTasksComponent implements OnInit {
    @Input() selectedJob: Job;

    ngOnInit() {
        console.log(this)
    }
    pickupPhoto() {
        
    }
    ladingRecieved() {
        console.log("ladingRecieved")
    }
}