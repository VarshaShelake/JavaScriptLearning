console.log(`........................................Different operations on array of fruits........................................`);
const fruits_seasonal=[`Banana`, `Orange`, 'Apple', 'Mango', 'Water Melon']
console.log(`The given fruit array is :`);
console.log(fruits_seasonal);

// var totalElements=fruits_seasonal.length
// console.log(`The count of elements in given fruits array is : ${totalElements}`);

var firstElement=fruits_seasonal[0]
var lastElement=fruits_seasonal[fruits_seasonal.length-1]
console.log(`\n******** 1) First and last element :`);
console.log(`The first element in given fruits array is  : ${firstElement}`);
console.log(`The last elements in given fruits array is  : ${lastElement}`);

console.log(`\n******** 2) Add element Papaya before Banana element :`);
fruits_seasonal.unshift(`Papaya`)
console.log(fruits_seasonal);

console.log(`\n******** 3) Remove mango fruit element from given fruit array :`);
// let removeMango=fruits_seasonal.splice(0,4,)
// console.log(removeMango);
fruits_seasonal.splice(4,1,)
console.log(fruits_seasonal);

console.log(`\n******** 4) Insert fruit Pineapple at the end of fruit array :`);
fruits_seasonal.push('Pineapple')
console.log(fruits_seasonal);

console.log(`\n******** 5) Insert element Dragon Fruit before Water Melon :`);
fruits_seasonal.splice(4,0,'Dragon Fruit')
console.log(fruits_seasonal);

// var fruits_seasonal1=[`Banana`, `Orange`, 'Apple', 'Mango', 'Water Melon']
// console.log(`The given fruits array is                      :  ${fruits_seasonal1}`);
console.log(`\n******** 6) Replace orange fruit with Kiwi :`);
fruits_seasonal.splice(2,1,'Kiwi')
console.log(fruits_seasonal);

console.log(`\n******** 7) Elements starting from index 1 to 4 is : `);
// var elementOneToFour=fruits_seasonal.slice(1,4)
// console.log(elementOneToFour);
var a=fruits_seasonal.slice(1,5)
console.log(a);

console.log(`\n******** 8) Last 3 elements using length property :`);
var b=fruits_seasonal.slice(4,7,fruits_seasonal.length-1)
console.log(b);