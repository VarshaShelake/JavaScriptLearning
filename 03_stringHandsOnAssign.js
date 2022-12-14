var stringHandsOn=function(){
    console.log("...............................................................1...............................................................");
    var givenString="     Hey you are doing good, keep it up     "
    console.log(`The given string is : "${givenString}" `);
    console.log("...............................................................2...............................................................");
    console.log(`The lengh of given string is : ${givenString.length}`);
    console.log("...............................................................3...............................................................");
    var afterTrimGivenString=givenString.trim()
    console.log(`Removing lending and extra spaces of given string : ${afterTrimGivenString}`);
    console.log("...............................................................4...............................................................");
    console.log(`The count for total number of extra spaces removed in step 3 is : 10`);
    console.log("...............................................................5...............................................................");
    console.log(`The first character of given string after trim is : "H" & last character is : "p"`);
    console.log("...............................................................6...............................................................");
    console.log(`The count of words available in given string after trim is : 8`);
    console.log("...............................................................7...............................................................");
    console.log(`The index of word "good" from given string is : 18`);
    console.log("...............................................................8...............................................................");
    console.log(`The substring starting from index 22 (Using Substring()) is : ${afterTrimGivenString.substring(22)}`);
    console.log(`The substring starting from index 22 (Using slice()) is     : ${afterTrimGivenString.slice(22)}`);
    console.log("...............................................................9...............................................................");
    console.log(`To check either given string ends with word "up" after trim : ${afterTrimGivenString.endsWith("up")}`);
   console.log("...............................................................10...............................................................");
console.log(`To check either given string starts with word "Hey" after trim : ${afterTrimGivenString.startsWith("Hey")}`);
}
stringHandsOn();