let a = 2, b = 3, c = 4, d = 5;

var sum = a + b;
console.log(a + " + " + b + " = " + sum);
var sub = b - a;
console.log(b + " - " + a + " = " + sub);
var div = c / a;
console.log(c + " / " + a +  " = " + div);
var perc = d % a;
console.log(d + " % " +a+ " = " + perc);
var mult = a * b;
console.log(a +" * " +b +" = " + mult);
var expo = a ** b;
console.log(a + " to the power of " + b + " = " + expo);

console.log(d ** d)
console.log(b * c)
// Using quokka allowed me to see the results of the expression in the same line as its code
const t = 10
console.log(t)
//console.log(++t)
// Constants are unable to be incremented as they are a constant value
let x = 10
let y = x

console.log("pre-increment")
y = ++x;
console.log(x)
console.log(y)
// Pre-increment increases the value of x before showing its value
console.log("post-increment")
y = x++;
// y = x++;
console.log(x)
console.log(y)
// console.log(y)
// Post-increment evaluates the value of the equation, then increments the figure
// PRE - If we want to increment the value and use it right now. Then use ++x
// POST - If we want to increment the value, and want to use the previous value. Then use x++

y = --x;
console.log(x)
console.log(y)

y = x--;
console.log(x)
console.log(y)
