import { Component, Input } from '@angular/core';

import { Job } from '../../job.model';

@Component({
    selector: 'cl-job-item',
    templateUrl: './job-item.template.html'
})
export class JobItemComponent {
    @Input() job: Job;
}