// Example number

let num = 10;

// Arithmetic operations

let sum = num + 5;
let diff = num - 2;
let product = num * 2;
let division = num / 2;
let remainder = num % 3;

console.log("Sum:", sum);
console.log("Difference:", diff);
console.log("Product:", product);
console.log("Division:", division);
console.log("Remainder:", remainder);


console.log("num == -10:", num == -10);     
console.log("num === -10:", num === -10);   



if ((num < 0 && num % 2 === 0) || num === 0) {
    console.log("Number is either negative and even, or zero.");
}

// Check if number is positive or negative

if (num > 0) {
    console.log("Number is positive.");
} 
else if (num < 0) {
    console.log("Number is negative.");
} 
else {
    console.log("Number is zero.");
}

// Switch to print days of the week

let day = 2; 

switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}
