
// let score = 33
// let score1 = "33abd"


// console.log(typeof score); // number
// console.log(typeof(score));// number

// console.log(typeof score1); //string
// console.log(typeof(score1));// string

// let valueInNumber = Number(score1)
// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber); //NAN
// // NaN means Not a number

// let score2 = null
// let valueInNumber2 = Number(score2)
// console.log(typeof score2); //object
// console.log(typeof valueInNumber2);  //number
// console.log(valueInNumber2); //0

// let score3 = undefined
// let valueInNumber3 = Number(score3)
// console.log(typeof score3); //undefined
// console.log(typeof valueInNumber3);  //number
// console.log(valueInNumber3); //NaN

// let score4 = true
// let valueInNumber4 = Number(score4)
// console.log(typeof score4); //boolean
// console.log(typeof valueInNumber4);  //number
// console.log(valueInNumber4); // 1
// // true is converted to 1 and false is converted to 0

// let score5 = "Hitesh"
// let valueInNumber5 = Number(score5)
// console.log(typeof score5); //string
// console.log(typeof valueInNumber5); //number
// console.log(valueInNumber5); //NaN

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn); //boolean
// console.log(booleanIsLoggedIn); //true

// let isLoggedIn1 = ""
// let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(typeof booleanIsLoggedIn1); //boolean;
// console.log(booleanIsLoggedIn1); //false

// let isLoggedIn2 = "Deepu"
// let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(typeof booleanIsLoggedIn2); //boolean;
// console.log(booleanIsLoggedIn2); //true
// // 0, "", null, undefined, NaN are falsy values
// // everything else is truthy value
// // falsy values are converted to false and truthy values are converted to true

// let sum = 33
// let stringsum = String(sum)
// console.log(typeof stringsum); //string
// console.log(stringsum); //33



// ******************** Operations ******************//

let value = 3
let negValue = -value
console.log(negValue); //-3
// negation operator is used to convert a positive number to negative and vice versa


let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3); //hello world
// + operator is used to concatenate two strings

console.log("1"+2); //12
// 1 is converted to string and 2 is converted to string and then concatenated
console.log(1+2+"3"); // 33
// 1 and 2 are added first and then converted to string and then concatenated
console.log(1+2+"3"+4); //334
// 1 and 2 are added first and then converted to string and then concatenated with 3 and then 4 is concatenated
console.log(1+2+"3"+4+5); //3345
// 1 and 2 are added first and then converted to string and then concatenated with 3 and then 4 is concatenated and then 5 is concatenated
// + operator is used to concatenate two strings and also to add two numbers

console.log(true);


let gamecounter = 100
gamecounter++;
console.log(gamecounter); //101
// ++ operator is used to increment the value of a variable by 1

