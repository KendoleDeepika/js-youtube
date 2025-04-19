
// console.log(2 > 1); //true
// console.log(2 < 1); //false
// console.log(2 >= 1); //true
// console.log(2 <= 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

//strict check
// console.log(2 === 1); //false
// console.log(2 !== 1); //true

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// when you compare any two values, make sure that they are of the same type
// if they are not, then JS will convert them to the same type
// and then compare them
// this is called type coercion

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //true
 //null is converted to 0

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //true
// undefined is not converted to 0

// strict check
console.log("2" === 2); //false
// strict check means that the values are of the same type
// so "2" is a string and 2 is a number
// so they are not equal
// but if we use ==, then JS will convert "2" to 2 and then compare
// so they are equal
// so use === and !== to check for strict equality
// so use == and != to check for loose equality

