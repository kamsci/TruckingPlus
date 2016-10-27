import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobItemComponent } from './jobs/job-list/job-item/job-item.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobTasksComponent } from './jobs/job-tasks/job-tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        JobListComponent,
        JobItemComponent,
        JobsComponent,
        JobTasksComponent
    ],
    imports: [
        BrowserModule, 
        HttpModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}