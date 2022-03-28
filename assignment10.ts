interface Shape{
    calculateArea()
}

class Circle implements Shape{
    radius: number
    constructor(radius){
        this.radius=radius
    }
    calculateArea() {
        console.log(3.14*this.radius*this.radius)
    }
    
}

class Square implements Shape{
    length: number
    constructor(length){
        this.length=length
    }
    calculateArea() {
        console.log(this.length*this.length)
    }
    
}

class Rectangle implements Shape{
    length: number
    breadth: number
    constructor(length, breadth){
        this.length=length
        this.breadth=breadth
    }
    calculateArea() {
        console.log(this.length*this.breadth)
    }
    
}
var c : Circle
var s: Square
var r: Rectangle
c = new Circle(4)
r = new Rectangle(10,32)
s = new Square(4)
c.calculateArea()
s.calculateArea()
r.calculateArea()
