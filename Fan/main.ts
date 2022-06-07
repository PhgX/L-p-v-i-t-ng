export class Fan {  
    private _speed : string;    
    private _on : boolean;
    private _radius: number;
    private _color: string;
    constructor (speedName : string, status: boolean = false, radius : number = 5, color : string = 'blue' ) {               
        this._speed = speedName;
        this._on  = status;
        this._radius = radius;
        this._color = color;       
    }    

    get Radius() {
        return this._radius;
    }
    
    get Color() {
        return this._color;
    }

    changeStatus(status : boolean)
    {
       this._on = status;       
    }

    set Speed(speedName : string) {  
        if(speedName === `SLOW`){
            this.Speed = setSpeed.SLOW;
        } else if (speedName === `MEDIUM`){
            this.Speed = setSpeed.MEDIUM
        } else if (speedName === `FAST`){
            this.Speed = setSpeed.FAST
        }
    }

    get Speed() {
        return this._speed;
    }
    

    
    toString() {
        if(this._on === true){
            return `Quạt đang bật, speed : ${this.Speed}, color : ${this.Color}, radius : ${this.Radius}`
        } else {
            return `Quạt đang tắt, color : ${this.Color}, radius : ${this.Radius}`
        }
    }
}

export enum setSpeed {SLOW = 'SLOW', MEDIUM ='MEDIUM', FAST ='FAST'}   

