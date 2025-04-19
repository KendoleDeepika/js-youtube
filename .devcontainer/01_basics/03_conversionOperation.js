
let score = 33
let score1 = "33abd"


console.log(typeof score); // number
console.log(typeof(score));// number

console.log(typeof score1); //string
console.log(typeof(score1));// string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber); //NAN
// NaN means Not a number

let score2 = null
let valueInNumber2 = Number(score2)
console.log(typeof score2); //object
console.log(typeof valueInNumber2);  //number
console.log(valueInNumber2); //0

let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(typeof score3); //undefined
console.log(typeof valueInNumber3);  //number
console.log(valueInNumber3); //NaN

let score4 = true
let valueInNumber4 = Number(score4)
console.log(typeof score4); //boolean
console.log(typeof valueInNumber4);  //number
console.log(valueInNumber4); // 1
// true is converted to 1 and false is converted to 0

let score5 = "Hitesh"
let valueInNumber5 = Number(score5)
console.log(typeof score5); //string
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(typeof booleanIsLoggedIn1); //boolean;
console.log(booleanIsLoggedIn1); //false

let isLoggedIn2 = "Deepu"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(typeof booleanIsLoggedIn2); //boolean;
console.log(booleanIsLoggedIn2); //true
// 0, "", null, undefined, NaN are falsy values
// everything else is truthy value
// falsy values are converted to false and truthy values are converted to true

let sum = 33
let stringsum = String(sum)
console.log(typeof stringsum); //string
console.log(stringsum); //33
