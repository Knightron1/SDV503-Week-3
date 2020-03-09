function sum_Of_Cubes(n) {
    var sumn = 0;
  
    for (var i = 1; i <= n; i++) {
      sumn += Math.pow(i, 3);
    }
    return sumn;
  }
  
  console.log(sum_Of_Cubes(2));
  console.log(sum_Of_Cubes(3));
  console.log(sum_Of_Cubes(5));
  console.log(sum_Of_Cubes(9));



let x = 5
let y = 7
let z = 9

var sumOne = Math.pow(x, 3);
var sumTwo = Math.pow(y, 3);
var sumThree = Math.pow(z, 3);

console.log(sumOne + sumTwo + sumThree)

