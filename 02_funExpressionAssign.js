console.log("........................................................1........................................................");
function square(num){
result=num*num
console.log("The Square of",num, "is",result);
}
square(5);
square(6);
square(25);
square(100);
console.log("........................................................2........................................................");
function typeOf(){
    var func="Function"
    console.log("The Type of function is : ", func);
}
typeOf();
console.log("........................................................3........................................................");
function areaOfRectangle(lengh,width){
    var lenght,width,result;
    result=lengh*width
    console.log("For Lenght=499 & Width=917");
    console.log("The Area Of Rectangle : ",result);
}
areaOfRectangle(499,917);
console.log("........................................................4........................................................");function swapValues(){
    var String1="Virat",String2="Anushka",temp
    console.log("Before Swap : ",String1,String2);
    temp=String1;
    String1=String2
    String2=temp
    console.log("After Swap  : ",String1,String2);
    var val1=1000,val2=2000
    console.log("Before Swap : ",val1,val2);
    temp=val1;
    val1=val2
    val2=temp
    console.log("After Swap  : ",val1,val2);
}
swapValues();
console.log("........................................................5........................................................");
function funExpresion(){
    // var string="varsha"
    // console.log(string.charAt(2));
    var givenString="JS the most popular language"
    console.log("The Given String is : ",givenString);
    console.log(" 1) The Total character available in given string is : ",givenString.length);
    console.log(" 2) The character at index 6 : ",givenString.charAt(6));
    console.log(" 3) The character at index 11 : ",givenString.charAt(11));
    console.log(" 4) The last character of given string is : ",givenString.charAt(27));
    console.log(" 5) The very first character in given string is :",givenString.charAt(givenString));
    console.log(" 6) The lengh of given string is : ",givenString.length);
    var square=givenString.length*givenString.length
    console.log(" 7) The Square of lenght for given string is : ",square);

}
funExpresion();