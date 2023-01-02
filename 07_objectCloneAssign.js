console.log(`............................................1..................................................` );

const arrayNumbers1=[20,3,4,56,90,400,49];
console.log(`The Given Array Is : `);
console.log(arrayNumbers1);
console.log(`Shallow Clone On Given Array :`);
let arrayShallowClone=arrayNumbers1;
console.log(arrayShallowClone);
console.log(`Added 55,66 Elements At The End Of Cloned Array Using Push Method: `);
arrayShallowClone.push(55,66)
console.log(arrayShallowClone);

console.log(`............................................2.................................................` );

console.log(`The Given Array Is : `);
const arrayNumbers2=[20,3,4,56,90,400,49];
console.log(arrayNumbers2);
let arrayDeepClone=[...arrayNumbers2]
console.log(`Deep Clone On Given array Using Spread Operator :`);
console.log(arrayDeepClone);
console.log(`Added 10,25 Elements At The End Of Original array Using Spread Operator:`);
let arrayNumbers2Update=[...arrayNumbers2,10,25]
console.log(arrayNumbers2Update);

console.log(`............................................3.................................................` );


// console.log(`The Given Array Is : `);
const arrayNumbers3=[20,3,4,56,90,400,49];
const arrayEven=[2,30,14,8];
console.log(`The Given array Is : `);
console.log(arrayNumbers3);
console.log(`The Array Of Even Numbers Is :`);
console.log(arrayEven);
console.log(`Merge Given Array And Even Array Using Concatenation :`);
let concatRes=arrayNumbers3.concat(arrayEven)
console.log(concatRes);
console.log(`Merge Given Array And Even array Using Spread Operator :`);
let spreadRes=[...arrayNumbers3,...arrayEven]
console.log(spreadRes);

console.log(`............................................4.................................................` );

console.log(`Employee-John Doe Object Created : `);

console.log(`............................................5.................................................` );
const emp_info={
    emp_id: 27,
    emp_name: 'John Doe',
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month:"65,000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharastra",
        country:"India"
    },
    mobiles: ["+91 8600-3456-88","1800-4567-32","+91-9096-5678-77"]
}
console.log(`Employee John Doe Details Are: `);
console.log(`Address   : ${emp_info.address.locality.colony},${emp_info.address.locality.street},${emp_info.address.city},${emp_info.address.state},${emp_info.address.country}`);
console.log(`Mobile No : ${emp_info.mobiles}`);

console.log(`............................................6.................................................` );

// console.log(`***** Nested Object Salary Of Employee John Doe :`);
// console.log(emp_info);

console.log(`***** Performed Deep Clone Using JSON.stringyfy() :`);
let emp_information=JSON.parse(JSON.stringify(emp_info))
console.log(emp_information);
// let emp_informationSal=JSON.parse(JSON.stringify(emp_info.salary.july_month))

console.log(`***** 6.A) Updated July_month Salary To 80K On Cloned Object :`);
console.log(emp_information.salary);
emp_information.salary.july_month="80,000INR"
console.log(emp_information.salary);

console.log(`***** 6.B) Updated Country United Kingdom On Original Object :`);
console.log(emp_info.address)
emp_info.address.country="United Kingdom"
console.log(emp_info.address);

console.log(`***** 6.C) Updated Values Of Original Object John Doe :`);
console.log(emp_info);
console.log(emp_info.salary);
console.log(emp_info.address);
console.log(emp_info.mobiles);

console.log(`***** 6.C) Updated Values Of Cloned Object John Doe :`);
console.log(emp_information);
console.log(emp_information.salary);
console.log(emp_information.address);
console.log(emp_information.mobiles);

