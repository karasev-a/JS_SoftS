var intNumber = parseInt(prompt("Enter INTEGER number"));

if (intNumber>0){
  ((intNumber%2)==0)?
      console.log(intNumber + " - is positiv event number"):
      console.log(intNumber + " - is positiv odd number");
}else if (intNumber<0) {
  ((intNumber%2)==0)?
      console.log(intNumber + " - is negative event number"):
      console.log(intNumber + " - is negative odd number");
}else{
  console.log("Number equales 0");
}
