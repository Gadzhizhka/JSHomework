"use strict";

//Задание №1

let count = 93;
if (count <= 100 && count >= 90) {
	console.log("отлично");
} else if (count <= 89 && count >= 60) {
	console.log("хорошо");
} else if (count <= 59 && count >= 40) {
	console.log("удовлетворительно");
} else if (count <= 39 && count >= 0) {
	console.log("попробуйте еще раз");
} else {
	console.log("");
}

//Задание №2

let operand1 = parseInt(prompt("Введите первый операнд"));
let operand2 = parseInt(prompt("Введите второй операнд"));
let operator = prompt("Введите оператор");
switch (operator) {
   case "+":
      console.log(operand1 + operand2);
      break;
   case "-":
      console.log(operand1 - operand2);
      break;
   case "*":
      console.log(operand1 * operand2);
      break;
   case "/":
      console.log(operand1 / operand2);
      break;
   default:
      console.log("Некорректный ввод");
}

//Задание №3

let plates = parseInt(prompt("Введите количество тарелок"));
let detergent = parseInt(prompt("Введите количество моющего средства"));
while (plates > 0 && detergent > 0) {
   plates--;
   detergent -= 0.5;
   console.log("Моющего средства осталось: " + detergent);
}
if (plates === 0) {
   console.log("Все тарелки вымыты. Моющего средства осталось: " + detergent)
} else {
   console.log("Моющее средство закончилось. Не вымытых тарелок осталось: " + plates)
}

//Задание №4

let userNum, programNum = Math.floor(Math.random() * 9) + 1;
while (userNum = parseInt(prompt("Введите число от 1 до 9"))) {
      if (programNum > userNum) {
      console.log("загаданное число больше");
   } else if (programNum < userNum) {
      console.log("загаданное число меньше");
   } else if (programNum === userNum) {
      console.log("Вы угадали");
      break;
   } else if (userNum === 0) {
    	console.log("выход из программы");
    	break;
		}
}
