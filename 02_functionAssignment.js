console.log(".......................................................1........................................");
function cmDetails1(){
console.log("CodeMind Training Institute Pune.");
}
cmDetails1();
function cmDetails2(){
console.log("Angular Trainig Certiification includes : HTML5, CSS, GIT+GITHub, JavaScipt, TypeScript, Bootstrap, Agile+Jira, Angular. ");
}
cmDetails2();

console.log(".......................................................2........................................");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name   : Varsha");
    console.log("Last Name    : Shelake");
    console.log("College Name : Karmayogi Engineering College Shelve-Pandharpur.");
}
personalDetails("Varsha","Shelake","Karmayogi Engineering College Shelve-Pandharpur.");

console.log(".......................................................3........................................");
function swapValuesDude(val1,val2){
console.log("Before Swapping : ",val1,val2);
var temp
temp=val1
val1=val2
val2=temp
console.log("After Swapping  : ",val1,val2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log(".......................................................4........................................");
function addThreeValues1(val1,val2,val3){
return val1+val2+val3;

}
var returnarg
returnarg=addThreeValues1(10.23,600,40);
console.log(returnarg);

function addThreeValues2(val1,val2,val3){
return val1+val2+val3
}
var returnarg=addThreeValues2("Hello","Good","Morning");
console.log(returnarg);
