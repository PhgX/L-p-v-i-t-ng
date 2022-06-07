export declare class Fan {
    private _speed;
    private _on;
    private _radius;
    private _color;
    constructor(speedName: string, status?: boolean, radius?: number, color?: string);
    get Radius(): number;
    get Color(): string;
    changeStatus(status: boolean): void;
    set Speed(speedName: string);
    get Speed(): string;
    toString(): string;
}
export declare enum setSpeed {
    SLOW = "SLOW",
    MEDIUM = "MEDIUM",
    FAST = "FAST"
}
