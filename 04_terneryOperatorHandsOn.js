console.log(`..................................................1..........................................`);
console.log(`*****To Check Male Marriage Eligibility Using Ternary Operator`);
function maleMarriageEligibility(gender,age,boyName){
var marriageEligibility=(age>=21) ? "Eligible" : "Not Eligible"
// console.log(marriageEligibility);
console.log(` Hey ${boyName} you are ${marriageEligibility} for marriage` );
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stev Jobs");

console.log(`..................................................2..........................................`);
console.log(`*****To Check Female Marriage Eligibility Using Ternary Operator`);
var femaleMarriageEligibility=function(gender,age,femaleName){
var marriageEligibility=(age>=18) ? "Eligible" : "Not Eligible"
console.log(`Hey ${femaleName} you are ${marriageEligibility} for marriage`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");