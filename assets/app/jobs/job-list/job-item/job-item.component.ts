import { Component, Input } from '@angular/core';

import { Job } from '../../job.model';

@Component({
    selector: 'cl-job-item',
    templateUrl: './job-item.template.html',
    styleUrls: ['../job-list.style.css']
})
export class JobItemComponent {
    @Input() job: Job;
}