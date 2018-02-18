"use strict";
//Task 1
console.log("Task 1");

function numberValid(number) {
  var res = false;
  if (typeof number === "number") {
    res = true;
  };
  return res;
};

function Figure() {
  var _xCenter;
  var _yCenter;

  this.getXCenter = function() {
    return _xCenter;
  };
  this.getYCenter = function() {
    return _yCenter;
  };

  this.setXCenter = function(xCenter) {
    if (numberValid(xCenter)) {
      _xCenter = xCenter;
    } else {
      _xCenter = 0;
    };
  };
  this.setYCenter = function(yCenter) {
    if (numberValid(yCenter)) {
      _yCenter = yCenter;
    } else {
      _yCenter = 0;
    };
  };

};

function Circle() {
  Figure.call(this);
  var _radius = 0;

  this.getRadius = function() {
    return _radius;
  };
  this.setRadius = function(radius) {
    if (numberValid(radius)) {
      _radius = radius;
    } else {
      _radius = 0;
    };
  };
  this.info = function() {
    console.log("X - " + this.getXCenter() + "; Y - " + this.getYCenter() +
      "; Radius - " + this.getRadius() + ";");
  }
};

function Rectangle() {
  Figure.call(this);
  var _diagonal = 0;

  this.getDiagonal = function() {
    return _diagonal;
  };
  this.setDiagonal = function(diagonal) {
    if (numberValid(diagonal)) {
      _diagonal = diagonal;
    } else {
      _diagonal = 0;
    };
  };
  this.info = function() {
    console.log("X - " + this.getXCenter() + "; Y - " + this.getYCenter() +
      "; Diagonal - " + this.getDiagonal() + ";");
  };

};

var fig = new Figure();
fig.setXCenter(-6);
fig.setYCenter(5);
console.log("X - " + fig.getXCenter() + "; Y - " + fig.getYCenter() + ";");
console.dir(fig);

var circle1 = new Circle();
circle1.setXCenter(6);
circle1.setYCenter(6);
circle1.setRadius(10);
circle1.info();
console.dir(circle1);

var rectangle1 = new Rectangle();
rectangle1.setXCenter(6);
rectangle1.setYCenter("a");
rectangle1.setDiagonal(10);
rectangle1.info();
console.dir(rectangle1);



console.log("---End of Task 1");


//Task 2
console.log("Task 2");

function Square() {
  this._side = 0;

  this.getSide = function() {
    return this._side;
  };
  this.setSide = function(side) {
    if (numberValid(side)) {
      this._side = side;
    } else {
      this._side = 0;
    };
  };

  this.calcPerimeter = function() {
    return this.getSide() * 4;
  };
};

function Cube1() {
  Square.call(this);
  this.calcPerimeter = function() {
    return this.getSide() * 12;
  };
};

function Cube2() {
  Square.call(this);
  var parentCalcPerimeter = this.calcPerimeter;
  this.calcPerimeter = function() {
    return ((parentCalcPerimeter.call(this)) + (this.getSide() * 8));
  };
}

var square1 = new Square();
square1.setSide(4);
console.log(square1.calcPerimeter());

var cube1 = new Cube1();
cube1.setSide(2);
console.log("First variant of Perimeter = " + cube1.calcPerimeter());

var cube2 = new Cube2();
cube2.setSide(2);
console.log("Second variant of Perimeter = " + cube2.calcPerimeter());


console.log("---End of Task 2");


//Task 3
console.log("Task 3");



console.log("---End of Task 3");



//Task 4
console.log("Task 4");

function FigureProt() {
  this._xCenter;
  this._yCenter;
};

FigureProt.prototype.getXCenter = function() {
  return this._xCenter;
};
FigureProt.prototype.getYCenter = function() {
  return this._yCenter;
};

FigureProt.prototype.setXCenter = function(xCenter) {
  if (numberValid(xCenter)) {
    this._xCenter = xCenter;
  } else {
    this._xCenter = 0;
  };
};
FigureProt.prototype.setYCenter = function(yCenter) {
  if (numberValid(yCenter)) {
    this._yCenter = yCenter;
  } else {
    this
    this._yCenter = 0;
  };
};


function CircleProt() {
  Figure.call(this);
  this._radius = 0;
};

CircleProt.prototype = Object.create(FigureProt.prototype);
CircleProt.prototype.constructor = CircleProt;

CircleProt.prototype.getRadius = function() {
  return this._radius;
};
CircleProt.prototype.setRadius = function(radius) {
  if (numberValid(radius)) {
    this._radius = radius;
  } else {
    this._radius = 0;
  };
};
CircleProt.prototype.info = function() {
  console.log("X - " + this.getXCenter() + "; Y - " + this.getYCenter() +
    "; Radius - " + this.getRadius() + ";");
};


function RectangleProt() {
  Figure.call(this);
  this._diagonal = 0;
};
RectangleProt.prototype = Object.create(FigureProt.prototype);
RectangleProt.prototype.constructor = RectangleProt;

RectangleProt.prototype.getDiagonal = function() {
  return this._diagonal;
};
RectangleProt.prototype.setDiagonal = function(diagonal) {
  if (numberValid(diagonal)) {
    this._diagonal = diagonal;
  } else {
    this._diagonal = 0;
  };
};
RectangleProt.prototype.info = function() {
  console.log("X - " + this.getXCenter() + "; Y - " + this.getYCenter() +
    "; Diagonal - " + this.getDiagonal() + ";");
};



var figureProt = new FigureProt();
figureProt.setXCenter(100);
figureProt.setYCenter(100);
console.log("X - " + figureProt.getXCenter() + "; Y - " + figureProt.getYCenter() + ";");
console.dir(fig);

var circle1Prot = new CircleProt();
this
circle1Prot.setXCenter(110);
circle1Prot.setYCenter(110);
circle1Prot.setRadius(10);
circle1Prot.info();
console.dir(circle1Prot);

var rectangle1Prot = new RectangleProt();
rectangle1Prot.setXCenter(120);
rectangle1Prot.setYCenter("b");
rectangle1Prot.setDiagonal(20);
rectangle1Prot.info();
console.dir(rectangle1Prot);


console.log("---End of Task 4");


//Task 5
console.log("Task 5");

function SquareProt() {
  this._side = 0;
};

SquareProt.prototype.getSide = function() {
  return this._side;
};
SquareProt.prototype.setSide = function(side) {
  if (numberValid(side)) {
    this._side = side;
  } else {
    this._side = 0;
  };
};

SquareProt.prototype.calcPerimeter = function() {
  return this.getSide() * 4;
};


function Cube1Prot() {
  SquareProt.call(this);
};
Cube1Prot.prototype = Object.create(SquareProt.prototype);
Cube1Prot.prototype.constructor = Cube1Prot;

Cube1Prot.prototype.calcPerimeter = function() {
  return this.getSide() * 12;
};


function Cube2Prot() {
  SquareProt.call(this);
};
Cube2Prot.prototype = Object.create(SquareProt.prototype);
Cube2Prot.prototype.constructor = Cube2Prot;

Cube2Prot.prototype.calcPerimeter = function() {
  return ((SquareProt.prototype.calcPerimeter.call(this)) + (this.getSide() * 8));
};


var square1Prot = new SquareProt();
square1Prot.setSide(2);
console.log(square1Prot.calcPerimeter());

var cube1Prot = new Cube1Prot();
cube1Prot.setSide(10);
console.log("First variant of Perimeter = " + cube1Prot.calcPerimeter());

var cube2Prot = new Cube2Prot();
cube2Prot.setSide(10);
console.log("Second variant of Perimeter = " + cube2Prot.calcPerimeter());
console.log("---End of Task 5");
