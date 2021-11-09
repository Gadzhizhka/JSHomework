"use strict";

// Задача №1

let array = [3, 90, 5, -100, 50, 0, 560, 1];
console.log(array);
array.sort(function(a, b) {
  return a - b;
});
console.log(array);

// Задача №3

let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];
for (let arr of numsArr) {
   for (let i = 0; i < arr.length; i++) {
     arr[i] += 10;
   }
 }
console.log(numsArr);
let newArray = [];
for (let i = numsArr.length - 1; i >= 0; i--) {
  if (numsArr[i] > 0) {
      newArray.push(numsArr[i]);
  }
}
console.log(newArray);
