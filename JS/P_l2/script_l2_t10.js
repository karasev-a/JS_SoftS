var a = Number(prompt("Enter whole positive number"));
var isNotEven = ((a%2)!=0);
var isTreeDigit = (((parseInt(a/100))>0) && ((parseInt(a/100))<10))
var notEvenTreeDigit = (isNotEven && isTreeDigit);
console.log("Is number not even and tree-digit? " + notEvenTreeDigit);
