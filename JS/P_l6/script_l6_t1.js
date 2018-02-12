"use strict";


//Task 1
console.log("Taslk 1");
var calculator = {
   firstVal: 0,
   secondVal: 0,
   read: function () {
     this.firstVal = parseFloat(prompt("Enter first number"));
     this.secondVal = parseFloat(prompt("Enter second number"));
   },
   sum: function () {
     var res =0;
     res = this.firstVal + this.secondVal;
     return res;

   },

   mul: function () {
     var res =0;
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
function  createMP3 (curTrack, curVol, tracks) {
  return {
    curTrack: curTrack,
    curVol: curVol,
    tracks: tracks,
    moreVol: function () {
      this.curVol++;
      console.log("Volume - " + this.curVol);
    },
    lessVol: function () {
      this.curVol--;
      console.log("Volume - " + this.curVol);
    },
    nextTrack: function () {
      this.curTrack++;
    },
    previousTrack: function () {
      this.curTrack--;
    },
    showInfoTrack: function () {
      console.log("# - " + this.curTrack + "; name - "+ this.tracks[this.curTrack-1].nameTrack
      + "; Author - " + this.tracks[this.curTrack-1].authorTrack
      + "; Duration of song - " + this.tracks[this.curTrack-1].lengthTrack);
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
var tracks = [createTrack("Belive", "Dragon", 5.25 ),
              createTrack("Piter", "Leninrad", 3.20),
              createTrack("Du hast", "Rammstein", 6.09)];

var walkmanSony = createMP3(1,5,tracks);

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
  f

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
console.log("---------------");
