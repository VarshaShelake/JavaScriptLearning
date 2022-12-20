console.log(`..................................................1..........................................`);
console.log(`************ To Check Age Eligibility For Voting************ `);

// sir code...................................
// var votingEligibility = function(age){
//     if(age<=0 || age>120 ){
//         console.log(`Age value : ${age}, Invalid data`);
//     }
//     if(age>=18 && age<=120) {
//         console.log(`your age is : ${age}, You can vote`);
//     }
//     if(age<18 && age>0){
//         console.log(`your age is : ${age}, You can note vote`);
//     }
// }
// votingEligibility(20);
// votingEligibility(89);
// votingEligibility(1500);
// votingEligibility(0);


var VotingEligibility=function(age){
var a1=`${age} age is eligible for voting`
var a2=`${age} age is In valid data`
var res=(age==0 && age>=120 && age==-age)||(age>=18 && age<=100) ? a1 : a2
return res
}
var e1=VotingEligibility(45);
console.log(e1);
var e2=VotingEligibility(17);
console.log(e2);
var e3=VotingEligibility(8);
console.log(e3);
var e4=VotingEligibility(20);
console.log(e4);
var e5=VotingEligibility(-10);
console.log(e5);
var e6=VotingEligibility(200);
console.log(e6);
var e7=VotingEligibility(0);
console.log(e7);
console.log(`..................................................2..........................................`);
var gradeCalculation=function(marks){
if(marks>=90 && marks<100){
console.log(`Funtastic marks=${marks}, your grade is A+ `);
}
if(marks>=75 && marks<90){
console.log(`Excellent marks=${marks}, your grade is A`);
}
if(marks>=50 && marks<75){
console.log(`Good marks=${marks}, your grade is B`);
}
if (marks>=35 && marks<50) {
    console.log(`Marks=${marks} your grade is C, Need Improvement `);
}
if (marks==0||marks<0){
    console.log(`Marks=${marks} Please provide the valid marks`);
}
if (marks>100) {
    console.log(`Marks=${marks} Please provide the valid marks`); 
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
