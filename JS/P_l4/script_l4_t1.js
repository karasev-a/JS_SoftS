// Task 1
var task1 = function(x, y) {
  return x + y;
}
console.log("task 1");
console.log(task1(5, 5));
///////////////////////////

//Task 2
function createArrayIterator(array) {
  // Ваш код
  var i = 0;
  return function itr() {
    return array[i++];
  };
}

var arr = [5, 6, 7];
var itr = createArrayIterator(arr);
console.log("Task 2");
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); // undefined
////////////////////////////////

//Task 3
function safeP() {
  var side1 = 0;
  var side2 = 0;

  function findPerimeter() {
    return ((side1 + side2) * 2);
  }

  function findSquare() {
    return side1 * side2;
  }

  function setS1S2(newS1, newS2) {
    if (typeof newS1 == "number" && newS1 > 0) {
      if (typeof newS2 == "number" && newS2 > 0) {
        side1 = newS1;
        side2 = newS2;
      }
    }
  }
  return [findPerimeter, findSquare, setS1S2];
}

var res = safeP();
var fPer = res[0];
var fSq = res[1];
var setS1S2 = res[2];
console.log("Task 3");
console.log(fPer());
console.log(fSq());
setS1S2(2, 2);
console.log(fPer());
console.log(fSq());


//Task 4
console.log("Task 4");
var n = parseInt(prompt("enter integer"));
console.log(n);
var res = 0;

function digitSum(n) {
  res = n % 10;
  n = parseInt(n / 10);
  if (n == 0) {
    return res;
  } else {
    return res + digitSum(n);
  }
}

res = digitSum(n);
console.log(res);


//Task 5
console.log("Task 5");

function format(data, type) {
   // Ваш код
   if(type == "number"){
     format = function () {
       data = Number(data);
       return data;
     }

   }else if (type == "boolean") {
     format = function () {
       data = Boolean(data);
       return data;
     }

   }else if (type == "string") {
     format = function () {
       data = String(data);
       return data;
     }
   }else {
     return data;
   }
}
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"


format("1", "1111");
console.log(format()); // 1
console.log(typeof format()); // "number"
