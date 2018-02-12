var arr = [10, 4, 2, 14, 67, 2, 11, 33, 15];
console.log(arr);

function bubbleSort(inArr) {

  var tmp = 0;
  var flag = 0;
  do {
    flag = 0;
    for (var i = 0; i < inArr.length; i++) {
      if ((i + 1) < inArr.length) {
        if (inArr[i] > inArr[i + 1]) {
          tmp = inArr[i + 1];
          inArr[i + 1] = inArr[i];
          inArr[i] = tmp;
          flag++;
        }
      }
    }
  } while (flag != 0);
  return inArr;
}


function quickSort(inArr, start, end) {

    }

// console.log(bubbleSort(arr));

console.log("quick sort");
quickSort(arr);
