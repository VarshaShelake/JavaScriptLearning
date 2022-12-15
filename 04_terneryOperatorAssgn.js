console.log(`..................................................1..........................................`);
console.log(`*****Greatest Number Amongs Two Numbers`);
var ternaryOperator = function(num1,num2){

var result=(num1>num2) ? num1 : num2
return result

}
// var result=ternaryOperator(10,-10);
console.log(`1) The greatest number between 10 & -10 is    : ${ternaryOperator(10,-10)}`);
console.log(`2) The greatest number between 800 & 900 is   : ${ternaryOperator(800,900)}`); 
console.log(`..................................................2..........................................`);
console.log(`*****To Check Even Odd Numbers`);
var evenOdd=function(number){
var evenOddResult=(number%2==0) ? "Even" : "Odd"
return evenOddResult;
}
console.log(`1) The 29 is  : ${evenOdd(29)} number`) ;
console.log(`2) The 44 is  : ${evenOdd(44)} number`) ;
console.log(`3) The 0 is   : ${evenOdd(0)} number`) ;
console.log(`4) The 101 is : ${evenOdd(29)} number`) ;

console.log(`..................................................3..........................................`);
console.log(`*****To Check Word Length Is Even Or Odd Numbers`);
var wordLengthEvenOdd=function(word){
    var wordLength=word.length;
    var wordLengthResult=(wordLength%2==0) ? "Even" : "Odd"
    return wordLengthResult;

}
console.log(`1) The length of "JavaScript" word is 10 & It's ${wordLengthEvenOdd("JavaScript")}`);
console.log(`2) The length of "Developer" word is 9 & It's ${wordLengthEvenOdd("Developer")}`);
console.log(`3) The length of "Google" word is 6 & It's ${wordLengthEvenOdd("Google")}`);




