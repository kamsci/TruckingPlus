import { Job } from './job.model';
import { Stop } from './stop.model';
import { Http } from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class JobService {
    jobs: Job[];
    oneJob: Job;

    constructor(private http: Http) {};

    getJobs(){
        return this.http.get('http://localhost:3000/jobs')
            .map(response  => {
                const data = response.json().result;
                let jobArray: any[] = [];

                for(var i = 0; i < data.length; i++) {
                    let pickupStop = new Stop(data[i].stops[0].stopType, data[i].stops[0].arrivalTime, data[i].stops[0].address, data[i].stops[0].cargoDescription);
                    let dropoffStop = new Stop(data[i].stops[1].stopType, data[i].stops[1].arrivalTime, data[i].stops[1].address);
                    let stops = [pickupStop, dropoffStop];

                    let job = new Job(data[i].title, data[i].referenceId, stops);

                    jobArray.push(job);
                }
                // console.log("getJobs", jobArray);
                return jobArray;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getOneJob(idx) {
        return this.oneJob;
    }
}