console.log(`..................................................1..........................................`);
console.log(`************ To Check Age Eligibility For Voting ************ `);
var checkVotingEligibility=function(age){
    // if (age==0||age>=120) {
    //      console.log(`In-Valid data`);
    //    } 
    //    if (age==-age) {
    //     console.log(`In-Valid data`);
    //    }
    if (age>=18 && age <=120) {
          
            console.log(`Valid Data      :  Your age is ${age}, you are eligible for voting`);
        } else {
            // console.log(`In-Valid Data`);  
            console.log(`In-Valid Data   :  Age ${age}`);
        }
    
} 
checkVotingEligibility(45);
checkVotingEligibility(17);
checkVotingEligibility(8);
checkVotingEligibility(20);
checkVotingEligibility(-10);
checkVotingEligibility(200);
checkVotingEligibility(7);

console.log(`..................................................2..........................................`);
console.log(`************ Grade Calculation ************* `);

var gradeCalculation=function(marks){
if (marks>=90&&marks<=100) {
    console.log(`Funtastic marks ${marks}, your grade is A+`);   
}
if (marks>=75 && marks<90) {
    console.log(`Excellent marks ${marks}, your grade is A`);
}
if (marks>=50 && marks<75) {
    console.log(`Good marks ${marks}, your grade is B`);
}
if (marks>=35 && marks<50) {
    console.log(`Marks is ${marks}, your grade is C. Need Improvement`);
}
if (marks==0||marks<0||marks>100) {
    console.log(`Marks is ${marks}, Please provide valid marks`);
}
if (marks=='eight') {
    console.log(`Marks is ${marks}, provide valid details`);
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
gradeCalculation(91);
gradeCalculation(`Eighty`);