import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
    declarations: [
        AppComponent,
        // JobListComponent,
        JobsComponent
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