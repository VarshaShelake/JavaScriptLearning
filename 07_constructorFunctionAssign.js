// function Student(name, rollNo, age){
//     this.name = name;
//     this.rollNo = rollNo;
//     this.age = age;
//  }
//  Student.prototype.country = "India";
//  let vinny = new Student("Vinny", 111, 23);
//  let jenny = new Student("Jenny", 44, 45);
//  let minny = new Student("Minny", 55, 23);
//  let tommy = new Student("Tommy", 66, 35);
//  console.log(vinny);
//  console.log(jenny);
//  console.log(minny);
//  console.log(tommy);
//  console.log(vinny.country);
//  console.log(minny.country);
//  console.log(jenny.country);
//  console.log(tommy.country);
console.log(
  `..........................................................................................................................................`
);
console.log(
  `**************** Constructor Function-Bank : With Data Members, Objects And Prototype Object`
);
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}
let yesBank = new Bank("YES Bank", "Chakan", 987654321987, "001987");
let sbiBank = new Bank("SBI Bank", "Nigdi", 123456789123, "009123");
let mahBank = new Bank("Mah. Bank", "Akurdi", 456789123456, 003456);
let axisBank = new Bank("Axis Bank", "Moshi", 789123456789, "006789");
//  console.log(`**Yes Bank Details Are :`);
//  console.log(yesBank);
console.log(
  `Yes Bank Details Are =        Bank Name : ${yesBank.bankName},     Location : ${yesBank.location},     IFSC : ${yesBank.ifscCode},    Branch Code : ${yesBank.branchCode}`
);

console.log(
  `SBI Bank Details Are =        Bank Name : ${sbiBank.bankName},     Location : ${sbiBank.location},      IFSC : ${sbiBank.ifscCode},    Branch Code : ${sbiBank.branchCode}`
);
//  console.log(`**SBI Bank Details Are :`);
//  console.log(sbiBank);
console.log(
  `Maharastra Bank Details Are = Bank Name : ${mahBank.bankName},    Location : ${mahBank.location},     IFSC : ${mahBank.ifscCode},    Branch Code : ${mahBank.branchCode}`
);

//  console.log(`**Maharastra Bank Details Are :`);
//  console.log(mahBank);
console.log(
  `Axis Bank Details Are =       Bank Name : ${axisBank.bankName},    Location : ${axisBank.location},      IFSC : ${axisBank.ifscCode},    Branch Code : ${axisBank.branchCode}`
);

//  console.log(`**Axis Bank Details Are :`);
//  console.log(axisBank);
console.log(
  `....................................................................................................................................`
);

console.log(
  `***************** Added openTime & closeTime Data Member On Prototype Object`
);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 AM IST";
//  console.log(`** The Open Time Of Yes Bank Is "${yesBank.openTime}" & Close Time Is "${yesBank.closeTime}" `);
console.log(
  `The Open Time Of SBI Bank Is "${sbiBank.openTime}" & Close Time Is "${sbiBank.closeTime}" `
);
console.log(
  `.....................................................................................................................................`
);

//  console.log(`** The Open Time Of Maharastra Bank Is "${mahBank.openTime}" & Close Time Is "${mahBank.closeTime}" `);
console.log(
  `The Open Time Of Axis Bank Is "${axisBank.openTime}" & Close Time Is "${axisBank.closeTime}" `
);
console.log(
  `.........................................................................................................................................`
);
console.log(
  `The Bank Name Is "${yesBank.bankName}", Branch Code Is "${yesBank.branchCode}" & Open Time Is "${Bank.prototype.openTime}"`
);
