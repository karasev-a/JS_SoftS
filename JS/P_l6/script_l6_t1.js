"use strict";

//Task 1
console.log("Taslk 1");
var calculator = {
  firstVal: 0,
  secondVal: 0,
  read: function() {
    this.firstVal = parseFloat(prompt("Enter first number"));
    this.secondVal = parseFloat(prompt("Enter second number"));
  },
  sum: function() {
    var res = 0;
    res = this.firstVal + this.secondVal;
    return res;
  },
  mul: function() {
    var res = 0;
    res = this.firstVal * this.secondVal;
    return res;
  }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log("---------------");

//Task 2
console.log("Task 2");

function createMP3(curTrack, curVol, tracks) {
  return {
    curTrack: curTrack,
    curVol: curVol,
    tracks: tracks,
    moreVol: function() {
      this.curVol++;
      console.log("Volume - " + this.curVol);
    },
    lessVol: function() {
      this.curVol--;
      console.log("Volume - " + this.curVol);
    },
    nextTrack: function() {
      this.curTrack++;
    },
    previousTrack: function() {
      this.curTrack--;
    },
    showInfoTrack: function() {
      console.log("# - " + this.curTrack + "; name - " + this.tracks[this.curTrack - 1].nameTrack +
        "; Author - " + this.tracks[this.curTrack - 1].authorTrack +
        "; Duration of song - " + this.tracks[this.curTrack - 1].lengthTrack);
    }
  };
}

function createTrack(nameTrack, authorTrack, lengthTrack) {
  return {
    nameTrack: nameTrack,
    authorTrack: authorTrack,
    lengthTrack: lengthTrack
  };

}
var tracks = [createTrack("Belive", "Dragon", 5.25),
  createTrack("Piter", "Leninrad", 3.20),
  createTrack("Du hast", "Rammstein", 6.09)
];

var walkmanSony = createMP3(1, 5, tracks);
console.dir(walkmanSony);
walkmanSony.moreVol();
walkmanSony.nextTrack();
walkmanSony.nextTrack();
walkmanSony.previousTrack();
walkmanSony.showInfoTrack();

console.log("---------------");

//Task 3
console.log("Task 3 ");

function maxSalary(salaries) {
  var maxSel = 0;
  for (var i in salaries) {
    if (maxSel < salaries[i]) {
      maxSel = salaries[i];
    };
  };
  return maxSel;
}
var salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250
};

var salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};
console.log(maxSalary(salaries1));
console.log(maxSalary(salaries2));

console.log("---------------");

//Task 4
console.log("Task 4");

function Walkman(curTrack, curVol, tracks) {
  this.curTrack = curTrack,
    this.curVol = curVol,
    this.tracks = tracks,
    this.moreVol = function() {
      this.curVol++;
      console.log("Volume - " + this.curVol);
    },
    this.lessVol = function() {
      this.curVol--;
      console.log("Volume - " + this.curVol);
    },
    this.nextTrack = function() {
      this.curTrack++;
    },
    this.previousTrack = function() {
      this.curTrack--;
    },
    this.showInfoTrack = function() {
      console.log("# - " + this.curTrack + "; name - " + this.tracks[this.curTrack - 1].nameTrack +
        "; Author - " + this.tracks[this.curTrack - 1].authorTrack +
        "; Duration of song - " + this.tracks[this.curTrack - 1].lengthTrack);
    };
};

var tracks = [createTrack("Belive", "Dragon", 5.25),
  createTrack("Piter", "Leninrad", 3.20),
  createTrack("Du hast", "Rammstein", 6.09)
];

var mp3Ipod = new Walkman(1, 1, tracks);
console.dir(mp3Ipod);
mp3Ipod.moreVol();
mp3Ipod.nextTrack();
mp3Ipod.nextTrack();
mp3Ipod.previousTrack();
mp3Ipod.showInfoTrack();

console.log("----------------");

//Task 5
console.log("Task 5");

function mul() {
  var res = 1;
  var countNum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      res = res * arguments[i];
      countNum++;
    };
  };
  if (countNum == 0) {
    res = 0;
  }
  return res;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

console.log("----------------");

//Task 6
console.log("Task 6");

var country = {
  name: "Украина",
  language: "украинский",
  capital: {
    name: "Киев",
    population: 2907817,
    area: 847.66
  }
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<", ">"); // "<Украина>"
format.apply(country, ["[", "]"]); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ["", ""]); // "Киев"

console.log("----------------");
