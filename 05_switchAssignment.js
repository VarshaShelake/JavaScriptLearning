console.log(`..................................................1..........................................`);
console.log(`************ To check month using switch case  ************ `);

function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(` ${monthNumber}st Month is January`);
        break;
        case 2:
            console.log(` ${monthNumber}nd Month is February`);
        break;
        case 3:
            console.log(` ${monthNumber}rd Month is March`);
        break;
        case 4:
            console.log(` ${monthNumber}th Month is April`);
        break;
        case 5:
            console.log(` ${monthNumber}th Month is May`);
        break;
        case 6:
            console.log(` ${monthNumber}th Month is June`);
        break;
        case 7:
            console.log(` ${monthNumber}th Month is Jully`);
        break;
        case 8:
            console.log(` ${monthNumber}th Month is August`);
        break;
        case 9:
            console.log(` ${monthNumber}th Month is Septmber`);
        break;
        case 10:
            console.log(` ${monthNumber}th Month is Octomber`);
        break;
        case 11:
            console.log(` ${monthNumber}th Month is November`);
        break;
        case 12:
            console.log(` ${monthNumber}th Month is December`);
        break;
        default:
            console.log(`given month is in-invalid`);
        break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
console.log(`..................................................2..........................................`);
console.log(`************ For Loop Hands On************ `);
console.log(`case 1 : Done & Committed`);
console.log(`case 2 : Done & Committed`);
console.log(`case 3 : Done & Committed`);
console.log(`case 4 : Done & Committed`);
console.log(`case 5 : Done & Committed`);
console.log(`case 6 : Done & Committed`);
console.log(`case 7 : Done & Committed`);
console.log(`..................................................2..........................................`);
console.log(`************ For Loop ************ `);

console.log(`******* 1) Number from 5 to 15`);
for (let myNumber = 5; myNumber <=15; myNumber++) {
    console.log(`${myNumber}`);
}
console.log(`******* 2) Number from 50 to 40`);
for (let myNumber2 = 50; myNumber2>=40; myNumber2--) {
   console.log(`${myNumber2}`);
}
console.log(`******* 3) Odd number from 1 to 15`);
for (let num1 = 1; num1<=15; num1++) {
    var res=num1%2
    if (!res==0) {
        console.log(`${num1}`);
    //     console.log(`${num1}, even`);
    // }
    // else{
    //     console.log(`${num1}, odd`);
    // }
}

}
console.log(`******* 3)** Odd number from 1 to 15`);
for (let num5 = 1; num5 < 15; num5++) {
    var result
    if(!num5==num5%2==0)
    console.log(`${num5}`);
}

console.log(`******* 4) Even number from 1 to 15`);
for (let num1 = 1; num1<=15; num1++) {
    if (num1%2==0) {
        console.log(`Even Num : ${num1}`);    
    }
     
}
console.log(`******* 5) Table of 5 like 5 10 15...50`);
for (let num2 = 1; num2<=50; num2++) {
    if (num2%5==0) {
        console.log(`${num2}`);    
    }
    
    
}
console.log(`******* 6) Print table of 10`);
for (let num3 = 10; num3 <=100 ; num3++) {
    if (num3%10==0) {
        console.log(num3);
    }

    
}
console.log(`******* 7) Print table of 10 in reverse order`);
for (let num4 = 100; num4 >=10; num4--) {
    if (num4%10==0) {
        console.log(num4);
    }
    
}