// console.log("Hello JS!");
/*console.error("Hello JS!");
console.warn("Hello JS!");*/

//! Переменные
// let, var, const
// console.log(birth);
// const birth = "04.11.06";
// console.log(birth);
// birth = "04.12.06";

// console.log(lastName);
// let lastName = "Saparaliev";
// console.log(lastName);
// lastName = "Pavlov";
// console.log(lastName);

// console.log(firstName);
// var firstName = "Abu";
// firstName = "Misha";
// comsole.log(firstName);

// !Названия переменных
// !можно

// ? нельзя цифру в начало
// let 5block = ""

// ? зарезервированные слова нельзя использовать
// let let = ""

// ? 2 слова пишем слитно
// first name = ""

// ?  без тире -
// first-name = ""

// !нельзя
// ? задаем цвет
// const RED = "#13ew456";
// ? используем доллар
// const $black = ""
// ? используем цифры но не вначале!
// const red10 = ""

// !ТИПЫ ДАННЫХ
// ? string
// let str = "strochka";
// console.log(str);
// const typeOfStr = typeof str;
// console.log(typeOfStr);
// console.log(typeof str);
// let str1 = "qwe";
// let str2 = "asd";
// let str3 = `zxc`;

// ? number
// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// ? boolean
// const bool1 = true;
// const bool2 = false;

// ? null - специальная пустота
// let error = null;

// ? undefined
// let hello;
// console.log(hello);

// ? object (object; array)
// let user = {
//   name: "Diana kim",
//   age: "20",
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);

// ? array
// let arr = [false, 100, true, {}, {}, "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr["5"]);

// ? symbol
// let id = Symbol("r567y");

// ? bigint
// let int = 323144241n;

// ! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(17 * 3);
// console.log(2 ** 3);
// console.log(10 % 7

// ! -, /, *
// console.log("10" / "2");

// !NaN -> Not a Number
// console.log("hello" / 2);

// ! +
// !concat -> (слияние)
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

// ! true-false значения
// console.log(Boolean(0)); //? false
// console.log(Boolean(-1)); //! true
// console.log(Boolean(null)); //? false
// console.log(Boolean(undefined)); //? false
// console.log(Boolean("hello")); //! true
// console.log(Boolean("")); //? false

// ! сравнение
// ! строгое === (тип данных и значение должно быть равно)
// console.log(3 === 5); //? false
// console.log(3 === 3); //! true
// console.log(3 === "3"); //? false
// console.log(3 !== 5); //! true

// ! нестрогое == (значение должно быть равно)
// console.log(3 == 3); //! true
// console.log("3" == 3); //! true
// console.log("3" != 3); //? false

//! >, <, =
// console.log(3 < 5); //! true
// console.log(5 < 3); //? false
// console.log(4 >= 4); //! true

// ! из string в number
// let elem = "10000qwefeqe";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "100000.123fdhrujn";
// console.log(parseInt(elem2));

//! parseFloat
// let elem3 = "100.200erafdas";
// console.log(parseFloat(elem3));

//! Number
// let elem4 = "10000";
// console.log(Number(elem4));

// ! из Number в string
// let num = 8990;
// console.log(typeof num.toString());
// console.log(String(num));
//! alert, prompt, confirm
// alert("Hello, user!");
// let firstName = prompt("Как вас зовут?");
// console.log(firstName);
// ! интерполяция - встроенное выражение
// alert(`${firstName},welcome`);

// let value = confirm("Вам есть 18?");
// console.log(value);

// let num1 = prompt("Введите первое число");
// let operator = prompt("Введите математический оператор");
// let num2 = prompt("Введите второе число");
// let result = eval(num1 + operator + num2); //? 2+2
// alert(result);
