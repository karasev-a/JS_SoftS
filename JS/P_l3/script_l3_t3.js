var num1 = parseInt(prompt("enter num 1"));
var num2 = parseInt(prompt("enter num 2"));
var num3 = parseInt(prompt("enter num 3"));
var num4 = parseInt(prompt("enter num 4"));

if( (num1 == num2) && (num2 == num3) ){
  console.log("Fourth");
}else if ( (num1 == num2) && (num1 == num4)) {
  console.log("Third");
}else if( (num1 == num3) && (num1 == num4) ){
  console.log("Second");
}else if((num2 == num3) && (num3 == num4)){
  console.log("First");
};
