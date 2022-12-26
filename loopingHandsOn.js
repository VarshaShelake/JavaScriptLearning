var x=10
var display=function(){
    console.log(x);
    var x=20
};
display();
console.log(`....................................................1................................................`);
console.log(`*************** To count vowels in given sentence`);
function countVowel(sentence) {
    var counter=0
    var charCopy=''
    console.log(`The given sentence is : ${sentence}`);
    for (let index = 0; index < sentence.length; index++) {
        char=sentence.charAt(index)
        var charCopy = char.toLowerCase();
        if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
             char++
            // console.log(char);
            counter = counter +1;
            // console.log(` ${charCopy}`)

        }   
        
    }


    console.log(`Total number of vowels in given sentence are : ${counter}`);
}
countVowel(`I am very good IT Developer`)

console.log(`....................................................2................................................`);

console.log(`*************** The sum of cube of numbers from 1 to 5`);
function sumOfCubeOfNumber(num1) {
    var cube=num1*num1*num1
    
    console.log(`The of cube of number ${num1} is : ${cube}`);
   
}
sumOfCubeOfNumber(1);
sumOfCubeOfNumber(2);
sumOfCubeOfNumber(3);
sumOfCubeOfNumber(4);
sumOfCubeOfNumber(5);


function sum_Of_Cubes(n) {
    var sumn = 0;
  
    for (var i = 1; i <= n; i++) {
      sumn += Math.pow(i, 3);
    }
    return sumn;
  }
//   console.log(sum_Of_Cubes(5));
console.log(`The sum of cube of numbers from 1 to 5 is : ${sum_Of_Cubes(5)}`);

console.log(`....................................................3................................................`);
console.log(`**************** Print Odd positioned characters from given string `);


function oddPositionedChars(value) {
  console.log(`\nGiven string is : ${value}`);
  string1 = value.replaceAll(" ", "");
  var oddString = "";
  for (let i = 0; i < string1.length; i++) {
    var char = string1.charAt(i);
    if (i % 2 == 0) {
      oddString = oddString + " " + char;
    }
  }
  console.log(`Odd position characters in string : ${oddString}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT champ");

console.log(`....................................................4................................................`);
console.log(`*************** Factorial of a number`);

function factorialNumber(num) {
  var fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  console.log(`The factorial of number ${num} is   :  ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);





// function oddPositionedChar(str) {
//     var wordLength=str.length
//     for (let index = 0; index < wordLength; index++) {
//       if (wordLength%2==0) {
//         console.log(wordLength);
//       }
       
//     }
// }

// oddPositionedChar(`Hard work always pays back`);
// oddPositionedChar(`Soon,i will be Angular IT champ`);

// var s="Hard work always pays back"

// for (var i=0;i<=s.length-1;i++){

//  if (!i % 2 == 0){

//    console.log(s[i])

//  }

// }

// function factorial(n){
// let answer = 1;
// if (n == 0 || n == 1){
// return answer;
// }else{
// for(var i = n; i >= 1; i--){
// answer = answer * i;
// }
// }
// }