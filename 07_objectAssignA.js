
console.log(`...............................................................................................`);
console.log(`***** 1) Vehicle Class With Properties,Constructor and 5 Objects`);
class VehicleClass{
    constructor (type,company,color,model){
        this.type=type;
        this.company=company;
        this.color=color;
        this.model= model
    }

}
let vahicleObject1=new VehicleClass("Two-Wheeler","KRATOS R","Black-Red","Electric");
let vehicleObject2=new VehicleClass("Two-Wheeler","ROYAL ENFIELD","Black","Petrol");
let vehicleObject3=new VehicleClass("Two-Wheeler","ACTIVA","Purpal","Petrol");
let vehicleObject4=new VehicleClass("Two-Wheeler","TVS","Red-Black","Petrol");
let vehicleObject5=new VehicleClass("Two-Wheeler","HERO-HONDA","Black","Petrol");
console.log(vahicleObject1);
console.log(vehicleObject2);
console.log(vehicleObject3);
console.log(vehicleObject4);
console.log(vehicleObject5);


console.log(`...............................................................................................`);
console.log(`***** 2) College Class With Properties,Constructor,Member Function And 4 Objects`);
class CollegeDetails{
    constructor(name,departments,location,staff){
        this.name=name;
        this.departments=departments;
        this.location=location;
        this.staff=staff;
    }
    showDetails(){
        console.log(this.name,this.departments,this.location,this.staff);
    }
}
let PHDCollege=new CollegeDetails("SSBM",26,"Mumbai","120");
let MECollege=new CollegeDetails("KMEC",20,"Sangali","413");
let BECollege=new CollegeDetails("KECSP",15,"Solapur","304");
let diplomaCollege=new CollegeDetails("KPCSP",17,"Kolhapur","133");
PHDCollege.showDetails();
MECollege.showDetails();
BECollege.showDetails();
diplomaCollege.showDetails();
console.log(`...............................................................................................`);
console.log(`***** 3.1) Function - travelsObject with One Argument : PHDCollege Using For In Loop`);
function traversObject(PHDCollege){
        for (const key in PHDCollege) {
            if (PHDCollege.hasOwnProperty.call(PHDCollege, key)) {
                const element = PHDCollege[key];
                // console.log(key,element);
                console.log(`${key} : ${element}`);
                
            }
        }
    }
traversObject(PHDCollege);
console.log(`...............................................................................................`);
console.log(`***** 3.2) Function - traversObject With One Argement : MECollege Using For In Loop`);
function traversObject(MECollege){
    for (const key in MECollege) {
        if (MECollege.hasOwnProperty.call(MECollege, key)) {
            const element = MECollege[key];
            console.log(`${key} : ${element}`);
            
        }
    }
}
traversObject(MECollege);
console.log(`...............................................................................................`);
console.log(`***** 3.3) Function - traversObject With One Argument : BECollege Using For In Loop`);
function traversObject(BECollege){
    for (const key in BECollege) {
        if (BECollege.hasOwnProperty.call(BECollege, key)) {
            const element = BECollege[key];
            console.log(`${key} : ${element}`);
        }
    }
}
traversObject(BECollege);
console.log(`...............................................................................................`);
console.log(`***** 3.4) Function - traversObject With One Argument : diplomaCollege Using For In Loop`);
function traversObject(diplomaCollege){
    for (const key in diplomaCollege) {
        if (diplomaCollege.hasOwnProperty.call(diplomaCollege, key)) {
            const element = diplomaCollege[key];
            console.log(`${key} : ${element}`);
        }
    }
}
traversObject(diplomaCollege);
console.log(`...............................................................................................`);
