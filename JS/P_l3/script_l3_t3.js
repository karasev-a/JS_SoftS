var num1 = parseInt(prompt("enter num 1"));
var num2 = parseInt(prompt("enter num 2"));
var num3 = parseInt(prompt("enter num 3"));
var num4 = parseInt(prompt("enter num 4"));

if( (num1!=num2) && (num1!=num3) && (num1!=num4) ){
  console.log("first");
}else if ( (num2!=num3) && (num2!=num4)  ) {
  console.log("second");
}else if ( (num3!=num4) && (num3!=num2)  ) {
  console.log("third");
}else {
  console.log("fourth");
}
