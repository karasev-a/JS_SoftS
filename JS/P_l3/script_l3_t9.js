var arr = new Array();
var i = 0;
var num = 0;
var sum = 0;

console.log(isNaN(""));

while ((!isNaN((num = prompt("enter number")))) && (num != "") ) {
  arr[i] = parseFloat(num);
  sum = sum + parseFloat(num);
  i++;
}
console.log(sum);
console.log(arr);
