function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return (this.x + "," + this.y)
}

function Side(length) {
  this.length = length
}

function Shape(position) {
  this.position = []
}

Shape.prototype.addToPlane = function (x,y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function (x,y) {
  this.x = x
  this.y = y
  this.position = [this.x, this.y]
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype != Object.create(Polygon.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.diameter = function () {
  return this.radius * 2
}

Circle.prototype.area = function () {
  return this.radius^2 * Math.PI
}

Circle.prototype.circumference = function () {
  return this.radius * 2 * Math.PI
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype != Object.create(Circle.prototype)

Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
};

Polygon.prototype.perimeter = function () {
  var lengths = this.sides.map(obj => obj.length)
  return lengths.reduce(function (a,b) {
    return a + b
  })
};

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)

Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function () {
  return this.height * this.width
};

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
  var square = new Square(4)
  for (var prop in square) {
    if (square.hasOwnProperty(prop)) {
      return ('square.' + prop + ' = ' + square[prop])
    }
  }
}
