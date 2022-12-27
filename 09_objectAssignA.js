var professor = {
  name:"Mrs. S.Patil",
  education:"M.Tech",
  experience:"10 Years",
  gender:"female",
  age:"35",
  mobNumber:"9503032415",
  emailId:"sbPatil@gmail.com",
  city:"Pandharpur",
};
console.log(
  `....................................................................................................................................................`
);
console.log(`1) Object-Professor along different properties with values `);
console.log(professor);
console.log(
  `....................................................................................................................................................`
);
var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
  degree: {
    PHD: "Advance Computing",
    MTECH: "Computer Science",
    BE: "CSE",
    diploma: "Computer Technology",
  },
};
console.log(`2) Included Nested object Degrees : `);
console.log(professor.degree);
console.log(
  `....................................................................................................................................................`
);
var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
  degree: {
    PHD: "Advance Computing",
    MTECH: "Computer Science",
    BE: "CSE",
    diploma: "Computer Technology",

    cerificates: {
      cerificate1: "Hacker Rank Participation",
      cerificate2: "Certificate In IFE Course",
      cerificate3: "Certificate In Adv Programming",
    },
  },
};
console.log(`3) Included Another Nested Object As Certificates : `);
console.log(professor.degree.cerificates);
console.log(
  `....................................................................................................................................................`
);
var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
  degree: {
    PHD: "Advance Computing",
    MTECH: "Computer Science",
    BE: "CSE",
    diploma: "Computer Technology",
    addDegreeFun: function () {
      return this.PHD + this.MTECH + this.BE + this.diploma;
    },
  },
};
console.log(`4) Added Function As A Value Which Should Concat All Degrres : `);
console.log(professor.degree);
console.log(
  `Professor Total Degrees Are : ${professor.degree.PHD},${professor.degree.MTECH},${professor.degree.BE},${professor.degree.diploma}`
);
console.log(
  `....................................................................................................................................................`
);
var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
};
professor.married = "Yes";
console.log(`5) Added New Property IsMarried : `);
console.log(professor);
console.log(
  `....................................................................................................................................................`
);
var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
};
professor.mobNumber = "8698260549";
console.log(`6) Modified Existing Property Mobile Number :`);
console.log(professor);
console.log(
  `....................................................................................................................................................`
);

var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
  degree: {
    PHD: "Advance Computing",
    MTECH: "Computer Science",
    BE: "CSE",
    diploma: "Computer Technology",

    cerificates: {
      cerificate1: "Hacker Rank Participation",
      cerificate2: "Certificate In IFE Course",
      cerificate3: "Certificate In Adv Programming",
    },
  },
};
// console.log(`Certificates Are :`);
// console.log(professor.degree.cerificates);
delete professor.degree.cerificates.cerificate1;
console.log(`7) Deleted Certificate1 From Nestead Object : `);
console.log(professor.degree.cerificates);
console.log(
  `....................................................................................................................................................`
);

var professor = {
  name: "Mrs. S.Patil",
  education: "M.Tech",
  experience: "10 Years",
  gender: "female",
  age: "35",
  mobNumber: "9503032415",
  emailId: "sbPatil@gmail.com",
  city: "Pandharpur",
  degree: {
    PHD: "Advance Computing",
    MTECH: "Computer Science",
    BE: "CSE",
    diploma: "Computer Technology",

    cerificates: {
      cerificate1: "Hacker Rank Participation",
      cerificate2: "Certificate In IFE Course",
      cerificate3: "Certificate In Adva Programming",
    },
  },
};
// console.log(`Certificates Are :`);
// console.log(professor.degree.cerificates);
professor.degree.cerificates.cerificate4 = "Testing";
console.log(`8) Added New Certificate In Nested Object-Certificates :`);
console.log(professor.degree.cerificates);
console.log(
  `....................................................................................................................................................`
);
console.log(`9) Nestead Object Certificates On Console :`);
console.log(professor.degree.cerificates);

console.log(
  `....................................................................................................................................................`
);
