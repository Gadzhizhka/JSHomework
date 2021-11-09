"use strict";

// Задание №1

let height = 3;
let length = 9;
let width = 7;
let ploshad = 2 * (height * length + height * width + length * width);
console.log(ploshad);

// Задание №2

let n = 35;
let secondDigit = n % 10;
let firstDigit = (n - secondDigit) / 10;
let sum = firstDigit + secondDigit;
console.log(sum);

// Задание №3

let a = 7;
let b = 3;
a -= b;
b += a
a = b - a
console.log(a, b);
