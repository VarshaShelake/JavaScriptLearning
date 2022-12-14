console.log("..........................................1..........................................");
function stringTemplateAssignment(){
console.log(`My dream company is : "BMC Software India"`);
}
stringTemplateAssignment();
console.log("..........................................2..........................................");
console.log(`My hobbies are as follows :`);
var hobbie1="1) Learning new things, "
var hobbie2="2) Listening silent songs, "
var hobbie3="3) Watching web series-TV serials, "
console.log(hobbie1);
console.log(hobbie2);
console.log(hobbie3);
console.log(`My hobbies are (Using Variable Substitution) :${hobbie1}${hobbie2}${hobbie3}`);
var stringConcatenation=hobbie1 .concat(hobbie2 , hobbie3)
console.log(`My hobbies are (Using String concatenation) :${stringConcatenation}`);