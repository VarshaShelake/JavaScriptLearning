class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
    
}
console.log(`...................................................................................................................................`);
console.log(`***** A) Class-Bank Is Created With Properties And Initialized Using Constructor :`);

console.log(`...............................................................................................................................`);

console.log(`***** B) Class-Bank Objects Are Created :`);

const axis_bank=new Bank("Axis Bank","Nigdi",123456789123,"AXIS000123","7.8%");
const sbi_bank=new Bank("SBI Bank","Moshi",456789123456,"SBI0000123","8.8%");
const icici_bank=new Bank("ICICI Bank","Akurdi",789123456789,"ICICI00123","7.5%");
const kotak_bank=new Bank("KOTAK Bank","Nigdi",987654321987,"KOTAK00123","8.2%");
const hdfc_bank=new Bank("HDFC Bank","CHAKAN",654321987654,"HDFC000123","7.2%");
const panjab_bank=new Bank("PANJAB Bank","CHINCHWAD",321654987321,"PANJAB0123","8.9%");
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);

console.log(`..........................................................................................................................................`);

console.log(`***** C) Added All Objects Elements In Array Also Traversed Array Using For Of Loop And Print Elements Only Bank-Name & Location :`);

const bankObjArray=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank]
for (const Bank of bankObjArray) {
    console.log(`Bank Name Is : ${Bank.bank_name}, And Location Is : ${Bank.location}`);
}

console.log(`..................................................................................................................................................`);

console.log(`***** D) The Object Which Has Name-Kotak Bank Details Using For Of Loop :`);
const kotakBankObj=[kotak_bank]
for (const Bank of kotakBankObj) {
    console.log(kotak_bank);
}

console.log(`.............................................................................................................................................`);

console.log(`***** E) Details Using For Of Loop :`);
for (const Bank of bankObjArray) {
    console.log(Bank);
}
console.log(`..................................................................................................................................................`);