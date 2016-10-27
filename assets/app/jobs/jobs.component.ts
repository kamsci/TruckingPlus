import { Component } from '@angular/core';
import { JobListComponent } from './job-list/job-list.component';
import { JobTasksComponent } from './job-tasks/job-tasks.component';

@Component({
    selector: 'cl-jobs',
    templateUrl: './jobs.template.html',
    providers: [ JobListComponent, JobTasksComponent ]
})
export class JobsComponent {

}