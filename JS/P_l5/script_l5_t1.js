//Task 1 - Object
console.log("Task 1 - Object");
var user = {};
user.name = "Cris";
user.surname = "Simons";
console.log(user);
user.name = "Brain";
console.log(user);
delete user.name;
console.log(user.name);
console.log(user);
console.log("----------------");

//Task 2 - Object
console.log("Task 2 - Object");
console.log("1 variant - usual");
var car = {};
car.model = "Audi";
car.speed = 250;
car.run = function() {
  console.log(car.model + " goes whith speed " + car.speed + " km/h.");
};
car.stop = function() {
  console.log(car.model + " stoped!");
}
console.log(car);
car.run();
car.stop();

console.log("2 variant - array");
var car = {};
car["model"] = "Audi";
car["speed"] = 250;
car["run"] = function() {
  console.log(car["model"] + " goes whith speed " + car["speed"] + " km/h.");
};
car["stop"] = function() {
  console.log(car["model"] + " stoped!");
}
console.log(car);
car["run"]();
car["stop"]();

console.log("3 variant - simple");
var car = {
  model: "Audi",
  speed: 250,
  run: function() {
    console.log(car.model + " goes whith speed " + car.speed + " km/h.");
  },
  stop: function() {
    console.log(car.model + " stoped!");
  }
};
console.log(car);
car.run();
car.stop();

console.log("----------------");

//Task 3 - Object
console.log("Task 3 - Object");
var tv = {
  currentChannel: 1,
  nextChannel: function() {
    tv.currentChannel++;
  },
  previousChannel: function() {
    tv.currentChannel--;
  },
  setChannel: function(number) {
    tv.currentChannel = parseInt(number);
  }
}
console.log(tv);
tv.setChannel(55);
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);
tv.nextChannel();
tv.nextChannel();
console.log(tv.currentChannel);



console.log("----------------");


//Task 4 - Object
console.log("Task 4 -  MP3");

var walkman = {
  currentTrack: 1,
  currentVolume: 0,
  tracks: [{
      numTrack: 1,
      nameTrack: "Belive",
      authoTrackr: "Im Dragon",
      lengthTrack: 5.25
    }, {
      numTrack: 2,
      nameTrack: "Piter",
      authoTrackr: "Leninrad",
      lengthTrack: 3.20
    },
    {
      numTrack: 3,
      nameTrack: "Du hast",
      authoTrackr: "Rammstein",
      lengthTrack: 6.09
    }
  ],

  nextTrack: function() {
    walkman.currentTrack++;
  },
  previousTrack: function() {
    walkman.currentTrack--;
  },
  moreVol: function() {
    walkman.currentVolume++;
  },
  lessVol: function() {
    walkman.currentVolume--;
  },
  showInfoTrack: function() {
    console.log(walkman.tracks[walkman.currentTrack - 1]);
  }
}
console.log(walkman);
walkman.moreVol();
console.log(walkman.currentVolume);
walkman.nextTrack();
walkman.showInfoTrack();
console.log("----------------");


//Task 5 - Object
console.log("Task 5 - Object");

var usersList = {
   users:[
     {
      name: "John",
      age: 26,
      expirience: 1,
      languages: ["Java", "JS", "SQL"]
    },
    {
      name: "Bill",
      age: 30,
      expirience: 5,
      languages: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Mike",
      age: 32,
      expirience: 4,
      languages: ["Python", "SQL"]
    }
  ],

  showUsers: function () {
    for (var i = 0; i < usersList.users.length; i++) {
      console.log(usersList.users[i]);
    }
  }
};
usersList.showUsers();
console.log("----------------");

//Task 6 - Objects
console.log("Task 6 - Object");

function isEmpty(Obj) {
  countProp = 0;
  res = true;
  for (var i in Obj) {
    if (Obj.hasOwnProperty(i)) {
      res = false;
      break;
    }
  }
  return res;
};

var us = {
  //name: "www"
};

console.log("Is object empty? -  " + isEmpty(us));
console.log("----------------");

//Task 7 - Object
console.log("Task 7 ");
var salaries1 = {
   John: 100,
   Bill: 100,
   Mike: 100
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};

function findAverageSalart(salaries) {
  var res = 0;
  var amountSalary = 0;
  var summSalary = 0;
  for (var i in salaries) {
      summSalary = summSalary + salaries[i];
      amountSalary++;
  }
  res = summSalary / amountSalary;
  return res;
}
console.log(findAverageSalart(salaries1));
console.log(findAverageSalart(salaries2));

console.log("----------------");
