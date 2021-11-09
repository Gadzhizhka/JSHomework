"use strict";

// Задача №1
let nums = [
     [23, 56, 75, -90, 123],
     [17, 0, -6429, -122],
     [19, 86, 55, -3, 900, 0, 0],
     [4, 9, -2]
  ];
let sum = 0;
let count = 0;
for (let arr of nums) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
    sum += arr[i];
    count++;
  }
}
console.log(nums, sum/count);

// Задача №2
let mas = [];
for (let i = 0; i < 7; i++) {
  mas[i] = Math.floor(Math.random() * (301 - 5)) + 5;
}
console.log(mas);
let min = mas[0];
let max = min;
for (let i = 1; i < mas.length; ++i) {
  if (mas[i] > max) max = mas[i];
  if (mas[i] < min) min = mas[i];
}
let indexMin = mas.indexOf(min);
let indexMax = mas.indexOf(max);
mas[indexMin] = max;
mas[indexMax] = min;
console.log(mas);

// Задача №3

let array = [25, -30, -7, -120, 2, -57, -7, 18, 72, 0, -120];
let newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
   if (array[i] < 0) {
      newArray.push(array[i]);
   }
}
console.log(newArray);

// Задача №4

let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let login;
while (!logins.includes(login)) {
     login = prompt("Введите логин");
}
alert("Отлично!");

// Задача №5

login = prompt("Введите логин");
while (logins.includes(login)) {
     login = prompt("Придумайте другой логин");
}
logins.push(login);
console.log(logins);
