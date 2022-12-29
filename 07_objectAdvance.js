class empObject{
    constructor (name, id, age, city){
        this.name=name;
        this.id=id;
        this.age=age;
        this.city=city;
    }
    show(){
        console.log(this.name,this.id,this.age,this.city);
    }

}
let empV=new empObject("v",1,20,"pune");
let empH=new empObject("h",2,30,"ppur");
// console.log(empV);
// console.log(empH);
empV.show();
empH.show();

class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);

function traversObject(empJay){
for (const key in empJay) {
    if (Object.hasOwnProperty.call(empJay, key)) {
        const element = empJay[key];
        console.log(key, element);
        
    }
}
}
traversObject(empJay);