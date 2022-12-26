console.log(`**************While Loop & Do While Loop Hands On`);
console.log(`Step 1 : Done and committed`);
console.log(`Step 2 : Done and committed`);
console.log(`Step 3 : Done and committed`);
console.log(`Step 4 : Done and committed`);
console.log(`Step 5 : Done and committed`);
console.log(`Step 6 : Done and committed`);
console.log(`Step 7 : Done and committed`);

console.log(`................While Loop Handson......................`);
console.log(`************ 1) Print numer from 5 to 15`);
var num1=5
while (num1<=15) {
    console.log(num1);
    num1++
}
console.log(`************ 2) Print numer from 50 to 40`);
var num2=50
while (num2>=40) {
    console.log(num2);
    num2--
}
console.log(`************ 3) Odd numbers from 1 to 15`);
var num3=1
while (num3<=15) {
    if (num3%2==1) {
        console.log(`${num3}`);

    }
    num3++
}
console.log(`************ 4) Even numbers from 1 to 15`);
var num4=1
while (num4<=15) {
    if (num4%2==0) {
        console.log(num4);
    }
    num4++
}
console.log(`................ Do While Loop Handson......................`);
console.log(`************ 5) Print table of 5`);
var num5=5
do {
    console.log(num5);
    num5=num5+5
} while (num5<=50);
console.log(`************ 5)*** Print table of 5`);
var number5=5
do {
    number5++
    if (number5%5==0) {
        console.log(number5);
    }
} while (number5<=50);
console.log(`************ 6) Print table of 10`);
var num6=10
do {
    console.log(num6);
    num6=num6+10
} while (num6<=100);
console.log(`************ 7) Table of 10 in reverse order`);
var num7=100
do {
    console.log(num7);
    num7=num7-10
} while (num7>=10);
