var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        console.log(3.14 * this.radius * this.radius);
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(length) {
        this.length = length;
    }
    Square.prototype.calculateArea = function () {
        console.log(this.length * this.length);
    };
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.calculateArea = function () {
        console.log(this.length * this.breadth);
    };
    return Rectangle;
}());
var c;
var s;
var r;
c = new Circle(4);
r = new Rectangle(10, 32);
s = new Square(4);
c.calculateArea();
s.calculateArea();
r.calculateArea();
