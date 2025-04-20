//primitivre data types

// 7 types: string, number, boolean, null, undefined, symbol, bigint

// string : strings are used to represent text
// string is a sequence of characters
// number : numbers are used to represent numbers
//boolean : boolean is used to represent true or false
// null : null is used to represent no value
// undefined : undefined is used to represent a variable that has not been assigned a value
// symbol : symbol is used to represent a unique value
// bigint : bigint is used to represent a number that is too large to be represented by a number

const score = 100; // number
const scoreValue = 100.3;

const isLoggedIn = true; // boolean
const isLoggedOut = false; // boolean
const outsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123'); //symbol
const id2 = Symbol('123'); //symbol
// id and id2 are not equal
console.log(id === id2); // false
// id and id2 are unique values
// so they are not equal

const bigNumber = 234567567856786789n;

  

//Refrerence data types 
// object : object is used to represent a collection of key-value pairs
// array : array is used to represent a collection of values
// function : function is used to represent a block of code that can be called

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
// This is called dynamic typing
// JavaScript is a weakly typed language, which means that it will automatically convert values from one type to another when necessary.
// This is called type coercion.

const heros = ["spiderman", "batman", "superman"]; // array
const myObj = {
  name: "John",
  age: 30,
  isMarried: false,
}; // object. The data present inside the curly braces is called an object literal

// function defination : function(){}
const myFunc = function () {
  console.log("Hello World");
}; // function

console.log(typeof score); // number
console.log(typeof bigNumber); // bigint
console.log(typeof isLoggedIn); // boolean
console.log(typeof isLoggedOut); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunc); // function
console.log(typeof scoreValue); // number
console.log(typeof id2);



