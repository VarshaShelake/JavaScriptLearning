console.log(`\n ************ To Check TCS Interview Eligibility************ `);

var funExprInterviewEligibility=function(gradScore,hscScrore,sscScore,candidateName){
var s1=`\n congrates ${candidateName} you are Eligible for TCS Interview`
var s2=`\n Unfortunately ${candidateName} you are Not Eligible for TCS Interview`
    var result=(gradScore>=70||hscScrore>=80||sscScore>=90) ? s1 :s2
return result
}

var firstCandidate=funExprInterviewEligibility(80,86,90,"Varsha");
console.log(firstCandidate);
var secondCanditdate=funExprInterviewEligibility(70,65,55,"Rohini");
console.log(secondCanditdate);
var thirdCandidate=funExprInterviewEligibility(60,79,88,"Priyanka");
console.log(thirdCandidate);