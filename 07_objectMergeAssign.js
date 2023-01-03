const car={
    // carName:"Swift",
    // showroom_Price:"6.5L To 9L",
    // color:"Purpole",
    // // company:"Maruti Suzuki",
    // // Seator:"5-Seator",
    carName:"Creta SX",
    company:"Hundai",
    lounchYear:"2017"
}
const carEngin={
    // engine:"1.2 L 4-cylinder",
    // fuel_economy:"23-31km/L",
    // fuel_tank_capacity: "37L To 55L"
    enginePower:"1199CC",
    maxPower:"113BHP"
}
console.log(`Car Object :`);
console.log(car);
console.log(`CarEngine Object :`);
console.log(carEngin);
console.log(`Merged Car Object And CarEngine Objects Using Object.assign() :`);
let mergeUsingObjAssign=Object.assign(car,carEngin)
console.log(mergeUsingObjAssign);
console.log(`Merged Car Object And CarEngine Objects Using Spread Operator :`);
let mergeUsingSpreadOp={...car,...carEngin}
console.log(mergeUsingSpreadOp);