export class Time {
    private _startTime : number;
    private _endTime: number;
    
    constructor () {
       this._startTime = new Date().getMilliseconds();
    } 

    get startTime() {
        return this._startTime;
    }    
    set startTime(startTime) {
        this._startTime = startTime;
    }    
    
    get endTime() {
        return this._endTime;        
    }
    set endTime(endTime) {
        this._endTime = endTime;
    }
    
    start() : void {
        this._startTime = new Date().getMilliseconds();
    }

    end() : void {
        this._endTime = new Date().getMilliseconds();
    }

    getElapsedTime(): number {
        return this._endTime - this._startTime;
    }
}