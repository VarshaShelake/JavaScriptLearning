console.log("...............................................................1.1..............................................................");
var lengthSquareOfWord=function(string1,string2,string3){
// var string1="JavaScript"
// var string2="Google Chrome"
// var string3="Developer Smart"
console.log(`***** Fisrt String                    : ${string1}`);
var stringLength1=string1.length
console.log(`1) The length of 1st string is        : ${stringLength1}`);
console.log(`2) The square of 1st string length is : ${stringLength1*stringLength1}`);
console.log("...............................................................1.2..............................................................");
console.log(`***** Second String                   : ${string2}`);
var stringLength2=string2.length
console.log(`1) The length of 2nd string is        : ${string2.length}`);
console.log(`2) The square of 2nd string lenght is : ${stringLength2*stringLength2}`);
console.log("...............................................................1.3..............................................................");
console.log(`***** Third String                    : ${string3}`);
var stringLength3=string3.length
console.log(`1) The length of 3rd string is        : ${stringLength3}`);
console.log(`2) The square of 3rd string is        : ${stringLength3*stringLength3}`);
}
lengthSquareOfWord("JavaScript","Google Chrome","Developer Smart");

console.log("...............................................................2................................................................");
var funExpression=function(){
var givenString="I am Angular Developer"
console.log(`*****The given string is : ${givenString}`);
var givenStringLength=givenString.length
console.log(`1) The length of given string is                                   : ${givenStringLength} `);
// var givenStringSplit=givenString.split(" ")
// var totalWords=givenStringSplit.totalWords
// console.log(` ${totalWords}`);
console.log(`2) The total words avalable in given string is                     : `,4 );
console.log(`3) The given string length after devide by total number of words   : ${givenStringLength/4}`); 
console.log(`4) The given string length after multiply by total number of words : ${givenStringLength*4}`);
}
funExpression();

