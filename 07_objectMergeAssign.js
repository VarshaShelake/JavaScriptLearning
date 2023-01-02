const car={
    name:"Swift",
    showroom_Price:"6.5L To 9L",
    color:"Purpole",
    // company:"Maruti Suzuki",
    // Seator:"5-Seator",
}
const carEngin={
    engine:"1.2 L 4-cylinder",
    fuel_economy:"23-31km/L",
    fuel_tank_capacity: "37L To 55L"
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