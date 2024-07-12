// function fun() {
//   console.log("Hello World");
// }
// fun(); //calling a function

//function with arguments
// function fun(name) {
//   console.log(`Hello ${name}`);
// }
// fun("Harish");

// //function returning a value
// function fun() {
//   return "Rudra";
// }
// let str = fun();
// console.log(str);

// //function by default returns undefined.
// function fun() {}
// console.log(fun());

// let str = function fun() {
//   return "Rudra";
// };

// console.log(str());

//Anonymous Function
// let str = function () {
//   return "Rudra";
// };

// console.log(str());

//Arrow function
// let str = () => {
//   return "Rudra";
// };

// console.log(str());

//IIFE- immediate Invoke function expression
//auto-execution of function will happen
// (function fun() {
//   console.log(`Hello world`);
// })();

// (() => {
//   console.log("Hello World");
// })();

//using function constructor
// let str = new Function('console.log("Hello World");');
// str();

// //Generator function
// function* fun() {
//   yield "Hello";
//   yield "world";
//   yield "Shankar";
// }
// let str = fun();
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 20));

// let add = (a, b) => {
//   return a + b;
// };
// console.log(add(10, 20));

// let add = function (a, b) {
//   return a + b;
// };
// console.log(add(10, 20));

// ((a, b) => {
//   console.log(a + b);
// })(10, 20);

// function fun() {
//   document.getElementById("div").innerHTML = "Hello";
// }

let a = eval("10+25-33");
console.log(a);
