const input = require('readline-sync');
let str = input.question("Please enter a word: ");
let numsToSlice = Number(input.question("Please enter a number of characters to slice(minimun 3): "));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstThree = "";
let remaining = "";
let modStr = "";

//Use a template literal to print the original and modified string in a descriptive phrase.



//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (str.length < 4) {
    console.log(`Your word is too short, so we have changed it to LaunchCode.`);
    str = "LaunchCode";
}

if (numsToSlice < 3 || numsToSlice > str.length) {
    console.log("The number of letters you want to slice will not work, so we have changed it to 3.");
    numsToSlice = 3;
}


firstThree = str.slice(0, numsToSlice);
remaining = str.slice(numsToSlice);
modStr = remaining + firstThree;

console.log(`Your word ${str} has been modified to ${modStr}.`);