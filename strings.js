const firstword = "Hello"
const secondword = "World"

console.log(firstword + " " + secondword)
console.log(`${firstword} ${secondword}`)

let women = "10";
let men = "5";
console.log(+women + +men);

let aa = (1+2,3+4,4+6);
console.log(aa);

let x = 10;
console.log(x);
x += 10; // Takes the previous value for x adds 20 and assigns it to x
console.log(x)
x -= 10; // Takes the previous value for x subtracts 10 and assigns it to x
console.log(x);
x *= 10; //Takes the previous value for x and multiplies it by 10 then assigns it to x
console.log(x);
x /= 10; //Takes the previous value for x and divides it by 10 then assigns to x
console.log(x);
x %= 10; //Takes the previous value for x and finds the remainder after dividing by 10 then assigns to x
console.log(x);
x += 2;
console.log(x)
x **= 10; //Takes the previous value for x and multiplies it by itself 10 times, then assigns to x 
console.log(x);

let a = 10;
let b = 1;

if (a == b) { 
    console.log('The same number')};

if (a === b) { 
    console.log('The same number and data type')};

if (a !== b) {console.log ('They are a different numbers of same data type')}

if (a != b) {console.log ('They are different numbers')}

if (a > b) {console.log ('One is greater than')}

if (b < a) {console.log('One is less than the other')}

if (a >= b) {console.log('One is greater or equal to the other')}

if (b <= a) {console.log('One is lesser or equal to the other')}

console.log(10 == 5)
console.log(10 != 5)
console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= "5")
console.log(10 >= "10")
console.log(10 <= "10")
console.log(10 == "10")
console.log(10 === "10")
console.log(10 !== "10")

console.log(true == 1);
console.log(true == "1");
console.log(true == 0);
console.log(true == 1);
console.log(true == 0);
console.log(false == "0");
console.log(true != 1);
console.log(true != "1");
console.log(true != 0);
console.log(false != 1);
console.log(false != 0);
console.log(false != "0");

console.log("A" == "A");
console.log("a" == "a");
console.log("words"=="words");
console.log ("Z" > "A")
console.log("Raise" > "Race")
console.log("a" >= "A")

console.log(1 == "1")
//This is comparing whether 1 is the same as "1" and because the == operator changes everything to a number they are the same.
console.log(1 === "1")
//This is comparing whether 1 is the same as "1" but also checking if the data types match, in this case they dont
console.log(1 !== "1")
// This is comparing 1 and "1" while also checking if the data types dont match, which in this case is true

console.log(null == 0);
console.log(null===0);
console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(undefined == null);
console.log(undefined === null);
console.log(undefined == 0);
// Null is counted as a 0 for a few cases, whereas undefined is only equal to null. Otherwise undefined is not a number 
console.log(null + 1);
console.log(undefined > 0);
console.log(undefined + 1);
//While null can be converted to a number, undefined can not hence the not a number (NaN) 