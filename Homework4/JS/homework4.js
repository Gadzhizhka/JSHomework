"use strict";

// Задача №1

function getCountProduct(count) {
  if (count % 10 === 1) return `${count} товар`;
  if ((count % 10 === 2) || (count % 10 === 3) || (count % 10 === 4)) return `${count} товара`;
  return `${count} товаров`;
}
console.log(getCountProduct(145));
console.log(getCountProduct(79));
console.log(getCountProduct(12));
console.log(getCountProduct(117));
console.log(getCountProduct(190));
console.log(getCountProduct(15));
console.log(getCountProduct(32));
console.log(getCountProduct(714));
console.log(getCountProduct(8201));

// Задача №2

function getArrayOfRange(start, stop, step = 1) {
  let array = [];
  if (start < stop) {
    for (let i = start; i <= stop; i += step) array.push(i);
  } else {
    for (let i = start; i >= stop; i -= step) array.push(i);
  }
  return array;
}
console.log(getArrayOfRange(2, 222, 10));
console.log(getArrayOfRange(-7, 3));
console.log(getArrayOfRange(10, -3, 2));
console.log(getArrayOfRange(2, -5));

// Задача №3

// 3.1

console.log(typeof 45);
console.log(typeof "Привет");
console.log(typeof true);

// 3.2

let one;
console.log(typeof one);
let two = 2;
console.log(typeof two);

// 3.3

console.log(isNaN(46));
console.log(isNaN("25"));
console.log(isNaN("Привет"));
