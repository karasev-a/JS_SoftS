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
  format.call(user,"<<<",">>>");
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
var doubleMul = mul.bind(null,2); // Ваш код
var qudraMul = mul.bind(null,4);// Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

console.log("---End of Task 2");


//Task 3
console.log("Task 3");
function bind(func, context) {
   // Ваш код
   var f = (function () {
     func.apply(context, arguments);
   });
return f;

}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

console.log("---End of Task 2");



//Task 4
console.log("Task 4");


console.log("---End of Task 4");


//Task 5
console.log("Task 5");


console.log("---End of Task 5");


//Task 6
console.log("Task 6");


console.log("---End of Task 6");
