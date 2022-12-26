// var sentence = "Yes Just do it man, I know you can";
// // Print the vowels only aeiou or AEIOU
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var char = sentence.charAt(index);
//     var charCopy = char.toLowerCase();
//     if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
//         console.log(char);
//         counter = counter +1;
//     }   
// }
// console.log(`Total vowels in string is : ${counter}`);

// var sentence = "Yes Just do it man, I know you can";
// // initi   cond  update 
console.log(`*********To count total number of char 'a' and 'A; in given sentence*********`);
console.log(`First sentence is   :  I AM Learning JavaScript, The Language of internet`);
console.log(`Second sentence is  :  My favourite movie is LAggAn`);
function countCharA(sentence) {
    var count=0
    for (let index = 0; index < sentence.length; index++) {
        var char=sentence.charAt(index)
        
        if (char=='a'||char=='A') {
            
            console.log(`${char}`);
            count=count+1
        }
        
    }

    
    console.log(`In given senetnces count of 'a' & 'A' is : ${count}`);
}

countCharA(`I AM Learning JavaScript, The Language of internet`);
countCharA(`My favourite movie is LAggAn`);