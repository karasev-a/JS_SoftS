// var x = Number(prompt("Enter number"));
// var n = parseInt(prompt("Enter degree"));
// console.log(pow(x,n));

// var minMax1 = Number(prompt("Enter x"));
// var minMax2 = Number(prompt("Enter y"));
// console.log(minMax(minMax1, minMax2));

 // var signParam = Number(prompt("Enter x"));
 // console.log(sign(signParam));

 // var calcNum1 = Number(prompt("Enter a"));
 // var calcNum2 = Number(prompt("Enter b"));
 // var calcOp = parseInt(prompt("Enter operation(integer from 1 to 4)"));
 // console.log(calc(calcNum1, calcNum2, calcOp));

 var dK = Number(prompt("Enter k"));
 var dN = parseInt(prompt("Enter n"));
 console.log(digitN(dK, dN));


function pow(x,n) {
  var res = 1;
  for(var i=0; i<n; i++){
    res = res * x;
  }
  return res;
}

function minMax(x, y) {
  return (x<y)?x:y;
}

function sign(x){
  var res;
  if(x < 0){
    res = -1;
  } else if (x>0) {
    res = 1;
  }else{
    res = 0;
  }
  return res;
}

function calc(a, b, op) {
  var res = 0;
  switch (op) {
    case 1:
      res = a - b;
      break;
    case 2:
      res = a * b;
      break;
    case 3:
      res = a / b;
      break;
    default:
      res = a + b;
  }

  return res;
}

function digitN(k, n) {
  var res = 0;

  if( ((k - (k % pow(10, n-1))) / pow(10,n-1)) <=0 ){
    res = -1;
  } else {
    res = (k - (k % pow(10, n-1))) / pow(10,n-1) % 10;
  }
  return res;

}
