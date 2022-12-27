const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given array :`);
console.log(arrayNumbers);
console.log(`................................................................................`);
console.log(`1) The length of given array is : ${arrayNumbers.length}`);
console.log(`................................................................................`);
var firstElement=arrayNumbers[0]
var lastElement=arrayNumbers.length
console.log(`2) The first element is : ${firstElement} & The last element is : ${lastElement}`);
console.log(`................................................................................`);
var a=arrayNumbers[arrayNumbers.length-3]
console.log(`3) The 3rd last element is : ${a}`);
console.log(`................................................................................`);
var resCon=' '
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2==0) {
        // console.log(`The even numbers : ${arrayNumbers[index]}` );
        resCon=resCon+" "+arrayNumbers[index]
    }
}
console.log(`4) Even numbers from given array is :${resCon}`);
console.log(`................................................................................`);
var resCon=" "
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2!=0) {
        resCon=resCon+" "+arrayNumbers[index]
    }
    
}
console.log(`5) Odd numbers from given array is :${resCon}`);
console.log(`................................................................................`);
var resCon=" "
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        resCon=resCon+" "+arrayNumbers[index]
        
    }
    
}
console.log(`6) All even index positioned elements are : ${resCon}`);

console.log(`................................................................................`);
var resCon=" "
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
        resCon=resCon+" "+arrayNumbers[index]
    }
    
}
console.log(`7) All odd index positioned elements are :${resCon}`);
console.log(`................................................................................`);
var sumOfNumbers=0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index]
    sumOfNumbers=sumOfNumbers+element
    
}
console.log(`8) The sum of all elements from given array is :${sumOfNumbers}`);
console.log(`................................................................................`);
var resCon=" "
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5==0) {
     resCon=resCon+" "+ arrayNumbers[index]  
    }
}
console.log(`9) Numbers from given array which are multiple of 5 :${resCon}`);
console.log(`................................................................................`);
console.log(`10) Is number 115 available in given array : ${arrayNumbers.includes(115)}`);
console.log(`................................................................................`);
console.log(`11) Is number 23 available in given array : ${arrayNumbers.includes(23)}`);
console.log(`................................................................................`);
arrayNumbers.splice(3,0,55,66)
console.log(`12) Insert element 55 66 before index 3 : ${arrayNumbers}`);
console.log(`................................................................................`);
arrayNumbers.splice(4,3)
console.log(`13) Delete 3 elements starting from index 4 : ${arrayNumbers}`);
console.log(`................................................................................`);
