"use strict";
//Task 1
console.log("Task 1");
var user = {
  name: "Tom"
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
var tomFormat1 = (function() {
  format.call(user, "<<<", ">>>");
}); // Ваш код
tomFormat1();

var tomFormat2 = format.bind(user);
tomFormat2("<<<", ">>>"); // "<<<Tom>>>"


console.log("---End of Task 1");


//Task 2
console.log("Task 2");

function mul(a, b) {
  return a - b;
}
var doubleMul = mul.bind(null, 2); // Ваш код
var qudraMul = mul.bind(null, 4); // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

console.log("---End of Task 2");


//Task 3
console.log("Task 3");

function bind(func, context) {
  // Ваш код
  var f = (function() {
    func.apply(context, arguments);
  });
  return f;

}

function func() {
  console.log(this.name + " - " + this.age);
}
var user = {
  name: "Tom",
  age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

console.log("---End of Task 3");



//Task 4
console.log("Task 4");

function Walkman(curTrack, tracks) {
  var _curVol = 0;
  this.curTrack = curTrack;
  this.tracks = tracks;

  function volumeValid(curVol) {
    var resValid = false;
    if ((curVol >= 0) && (curVol < 100)) {
      _curVol = curVol;
      resValid = true;
    } else {
      var resValid = false;
    };
    return resValid;
  };

  this.getVolume = function() {
    return _curVol;
  };
  this.setVolume = function(curVol) {
    if (volumeValid(curVol)) {
      console.log("Volume - " + _curVol);
    } else {
      _curVol = 0;
    };
  };

  this.moreVol = function() {
    _curVol++;
    if (volumeValid(_curVol)) {
      console.log("Volume - " + _curVol);
    } else {
      _curVol--;
      console.log("Max Volume!!!");
    };
  };
  this.lessVol = function() {
    _curVol--;
    if (volumeValid(_curVol)) {
      resVol = _curVol;
      console.log("Volume - " + _curVol);
    } else {
      _curVol++;
      console.log("Min Volume!!!");
    };
  };

  this.nextTrack = function() {
    this.curTrack++;
  };
  this.previousTrack = function() {
    this.curTrack--;
  };
  this.showInfoTrack = function() {
    console.log("# - " + this.curTrack + "; name - " + this.tracks[this.curTrack - 1].nameTrack +
      "; Author - " + this.tracks[this.curTrack - 1].authorTrack +
      "; Duration of song - " + this.tracks[this.curTrack - 1].lengthTrack);
  };
};

function Track(nameTrack, authorTrack, lengthTrack) {
  this.nameTrack = nameTrack;
  this.authorTrack = authorTrack;
  this.lengthTrack = lengthTrack;
};

var tracks = [new Track("Belive", "Dragon", 5.25),
  new Track("Piter", "Leninrad", 3.20),
  new Track("Du hast", "Rammstein", 6.09)
];

var mp3Sony = new Walkman(1, tracks);
mp3Sony.setVolume(99);
console.dir(mp3Sony);
mp3Sony.moreVol();
mp3Sony.nextTrack();
mp3Sony.nextTrack();
mp3Sony.previousTrack();
mp3Sony.showInfoTrack();


console.log("---End of Task 4");


//Task 5
console.log("Task 5");

function Sum(firstNumber, secondNumber) {
  var self = this;
  var _firstNumber = 0;
  var _secondNumber = 0;
  this.result = 0;

  function numberValid(number) {
    var resVal = false;
    if (typeof number == "number") {
      resVal = true;
    }
    return resVal;
  }

  this.firstNumber = function(firstNumber) {
    if (firstNumber === undefined) {
      return _firstNumber;
    } else if (numberValid(firstNumber)) {
      _firstNumber = firstNumber;
      calc();
    } else {};
  }

  this.secondNumber = function(secondNumber) {
    if (secondNumber === undefined) {
      return _secondNumber;
    } else if (numberValid(secondNumber)) {
      _secondNumber = secondNumber;
      calc();
    } else {};
  };

  function calc() {
    self.result = _firstNumber + _secondNumber;
    return self.result;
  };
}

var summ = new Sum(5, 10);
console.dir(summ);
summ.firstNumber(5);
console.log("First number - " + summ.firstNumber());
summ.secondNumber(10);
console.log("Second number - " + summ.secondNumber());
console.log("Result - " + summ.result);

summ.secondNumber(20);
console.log("Second number - " + summ.secondNumber());
console.log("Result - " + summ.result);

summ.firstNumber("aaaaaa");
console.log("Second number - " + summ.firstNumber());
console.log("Result - " + summ.result);


console.log("---End of Task 5");


//Task 6
console.log("Task 6");

var square = (function () {
   var firstSide = 0;
   var secondSide = 0;
   function operation() {
      return firstSide * secondSide;
   }
   return {
      setFirstSide: function (fSide) {
         firstSide = fSide;
      },
      setSecondSider: function (sSide) {
         secondSide = sSide;
      },
      operation: function () {
         return operation();
      }
   }
}());

var perimeter = (function () {
   var firstSide = 0;
   var secondSide = 0;
   function operation() {
      return (firstSide + secondSide)*2;
   }
   return {
      setFirstSide: function (fSide) {
         firstSide = fSide;
      },
      setSecondSider: function (sSide) {
         secondSide = sSide;
      },
      operation: function () {
         return operation();
      }
   }
}());

square.setFirstSide(5);
square.setSecondSider(10);
console.log(square);
console.log(square.operation());

perimeter.setFirstSide(5);
perimeter.setSecondSider(10);
console.log(perimeter);
console.log(perimeter.operation());

console.log("---End of Task 6");
