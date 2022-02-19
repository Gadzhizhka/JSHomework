"use strict";

// Задача №1

let yourNumber = 2;
function getDay(num) {
  let day = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if (num < 1 || num > 7) return "Некорректный ввод";
    else return day[num];
}
console.log(getDay(yourNumber));

// Задача №2

let arr = [2, 4, 25, 75, -5, 4];
let a = 25;
function adding(elem) {
  if (!(arr.includes(elem))) arr.push(elem);
}
adding(a);
console.log(arr);

// Задача №3

let arrNum = [-4, 25, 5, -7, 24, 3];
function randomSelection(elem) {
  let result = [], randomNum;
  let getRandom = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)};
  let randomLength = getRandom(0, 3);
  for (let i = 0; i < randomLength; i++) {
    randomNum = getRandom(0, elem.length - 1);
    result.push(elem[randomNum]);
  }
  return result;
}
console.log(randomSelection(arrNum));

// Задача №4

let text = "самое длинное слово в предложении";
