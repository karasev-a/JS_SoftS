
var n = parseInt(prompt("enter integer"));
console.log(n);
var res = 0;

while (n>0) {
  res = n%10;
  n = parseInt(n/10);
  console.log(res);

}
