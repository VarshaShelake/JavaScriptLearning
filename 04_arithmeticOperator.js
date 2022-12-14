console.log(`============ Assignment Operators =================`);
var modulusResult = num1 % 3;
console.log(`Modulus is ${modulusResult}`);

var num1 = 10;
var num2 = 5;
num1 += num2; // num1 = num1 + num2
              // num1 = 15;
console.log(`Compound Addition ${num1}`);

var num1 = 10;
var num2 = 5;
console.log(`Compound Subtraction ${num1-=num2}`); // num1 = 15 - 5


console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);
