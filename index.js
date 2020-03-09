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
// Using quokka allowed me to see the results of the equation in the same line as its code
let x = 10
let y = x

console.log("pre-increment")
y = ++x;
console.log(x)
console.log(y)

console.log("post-increment")
y = x++;
console.log(x)
console.log(y)