// function greet(fname, lname) {
//     console.log('Hello ' + fname + ' ' + lname);
// }

// greet('jeric', 'gaufo');

// let num3;

// function calcAdd(num1, num2) {
//     return num1 + num2;
// }

// let sum = calcAdd(1, 2);
// alert(sum);


// Input String
let origString = "GeeksGeeks";
// String to be added
let stringToAdd = "For";
// Position to add string
let indexPosition = 5;
 
// Using substring method to split string
newString = origString.substring(0, indexPosition)
        + stringToAdd + origString.substring(indexPosition);
 
// Display output
console.log(newString);