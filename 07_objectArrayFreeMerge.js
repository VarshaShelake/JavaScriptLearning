console.log(
    `..........................................................................................................................................`
  );
  
function myPersonalDetails(name,education,age,isMarried,mobNo,emailId){
    this.name=name;
    this.education=education;
    this.age=age;
    this.isMarried=isMarried;
    this.mobNo=mobNo;
    this.emailId=emailId;
}
console.log(`*****1) Object Using Literals - personalDetails : `)
let personalDetails=new myPersonalDetails("Varsha Shelake","BE-CSE",26,"True",9503032415,"shelakevn@gmail.com");
console.log(personalDetails);
console.log(
    `..........................................................................................................................................`
  );
  function myCollegeDetails(name,YOP,location,pincode){
    this.name=name;
    this.YOP=YOP;
    this.location=location;
    this.pincode=pincode;
  }
  let CollegeDetails=new myCollegeDetails("KECSP",2017,"Shelve-Pandharpur",413304);
  console.log(`*****2) Object Using Literals - collegeDetails :`);
  console.log(CollegeDetails);
  console.log(
    `..........................................................................................................................................`
  );
  console.log(`*****3) Added myPersonalDetails & myCollegeDetails : `);
  let merge=Object.assign(personalDetails,CollegeDetails)
  console.log(merge);
  console.log(
    `..........................................................................................................................................`
  );
  console.log(`*****4) Array Of My Friend Names :`);
let myFrndNames=['Ravi','Vrushali','Rani','Priyanka']  
Object.freeze(myFrndNames);
// console.log(`My Friens Name Are : `);
console.log(myFrndNames);
console.log(
    `..........................................................................................................................................`
  );
console.log(`*****5) Array Of myFrndName is Iterate Using for of Loop`);  
for (const iterator of myFrndNames) {
    console.log(iterator);
}
console.log(
    `..........................................................................................................................................`
  );
console.log(`*****6) Reverse The 2nd Word Of Given String :`); 
// let givenSent="Codemind Technology"
// console.log(`Input : ${givenSent}`); 

// let ReverseRes=reverseString(givenSent)
// console.log(ReverseRes);

// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const string ="Codemind Technology"
console.log(`Input  : "${string}"`);
let s1="Codemind";
let s2="Technology"
const result = reverseString(s2);
console.log(`Output : "${s1} ${result}"`);