//strings 
//strings are immutable
// A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging

const name = "Deepu"
const nameCount = 50

// console.log(name +nameCount+" Value") // string concatenation

//backticks
console.log(`Hello my name is ${name} and my nameCount is ${nameCount}`); // string interpolation

console.log("hello");

//How to declare a string in JS 
//string is a object and it has key value pairs

const gameName = new String("Cricket");
// console.log(gameName); // String { 'Cricket' }
// console.log(gameName[0]); // C
// console.log(gameName.__proto__); 
// console.log(gameName.length); //7
// console.log(gameName.toUpperCase()); //CRICKET
// console.log(gameName.toLowerCase()); //cricket
// console.log(gameName.charAt(0)); //C
// console.log(gameName.charAt(1)); //r
// console.log(gameName.indexOf("k")); //4
// console.log(gameName.lastIndexOf("k")); //4

// const newString = gameName.substring(0, 4); 
// console.log(newString); //Cric

// console.log(gameName.slice(0, 4)); //Cric
// console.log(gameName.slice(4)); //ket
// console.log(gameName.slice(-4)); //cket

// const anotherString = gameName.slice(0, 4);
// console.log(anotherString); //Cric

// const anotherString1 = gameName.slice(-8, -4);
// console.log(anotherString1);

// const newStringOne = "  Ddpeu jcks "
// console.log(newStringOne); //  Ddpeu jcks
// console.log(newStringOne.trim()); // Ddpeu jcks
// console.log(newStringOne.trimStart()); // Ddpeu jcks
// console.log(newStringOne.trimEnd()); //  Ddpeu jcks
// console.log(newStringOne.trimLeft()); // Ddpeu jcks
// console.log(newStringOne.trimRight()); //  Ddpeu jcks

const url = "https://deepu.com/deepu%20kendole"
console.log(url); // https://deepu.com/deepu%20kendole

console.log(url.replace("%20","-")) // https://deepu.com/deepu-kendole
console.log(url.includes("deepu")) // true

const newStringTwo = "Deepu Kendole is a software engineer";
console.log(newStringTwo.split(" ")); // [ 'Deepu', 'Kendole', 'is', 'a', 'software', 'engineer' ]



