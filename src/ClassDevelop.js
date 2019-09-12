"use strict";
exports.__esModule = true;
var a = /** @class */ (function () {
    function a() {
        console.log("me inician");
    }
    a.prototype.lol = function () {
        console.log("dsfsdf");
    };
    return a;
}());
exports.a = a;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.r = x;
        this.y = y;
        this.teta = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.getT = function () {
        return this.teta;
    };
    Point.prototype.getR = function () {
        return this.r;
    };
    return Point;
}());
exports.Point = Point;
function polarToC(r, teta) {
    return (new Point(r * Math.cos(teta), r * Math.sin(teta)));
}
exports.polarToC = polarToC;
function cToPolar(x, y) {
    var teta = Math.atan(x / y);
    var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return (new Point(r, teta));
}
exports.cToPolar = cToPolar;
