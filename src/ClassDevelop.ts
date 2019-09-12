import { number } from "prop-types";

export class a {
    constructor() {
        console.log("me inician");
    }
    lol(){
        console.log("dsfsdf");
    }
}

export class Point{
    x:number;
    y:number;
    r:number;
    teta:number;

    constructor(x:number,y:number){
        this.x=x;
        this.r=x;
        this.y=y;
        this.teta=y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getT(){
        return this.teta;
    }
    getR(){
        return this.r;
    }
} 

export function polarToC(r:number  , teta:number ){
    return (new Point( r*Math.cos(teta), r*Math.sin(teta)));
}
export function  cToPolar (x:number  , y:number ){
    var teta:number=Math.atan(x/y);
    var r:number=Math.sqrt(x**2+y**2);
    return (new Point(r, teta));
}