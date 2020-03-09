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