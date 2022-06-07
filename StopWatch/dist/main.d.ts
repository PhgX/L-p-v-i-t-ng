export declare class Time {
    private _startTime;
    private _endTime;
    constructor();
    get startTime(): number;
    set startTime(startTime: number);
    get endTime(): number;
    set endTime(endTime: number);
    start(): void;
    end(): void;
    getElapsedTime(): number;
}
