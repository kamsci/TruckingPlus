import { Stop } from './stop.model';

export class Job {

    public jobComplete: boolean = false;

    constructor (
        public title: string,
        public referenceId: string,
        public stops: Array<Stop>
    ) {}
}