/*
Instructions

Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:

● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.

Step-by-Step Tasks:

1. Write a function for each operation listed above using the Math
module.

2. Test each function with sample inputs to ensure it works as intended.

3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.

4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
1
● Round 23.67891 to 2 decimal places. */

//Function 1 - Absolute Value Calculation: Given any number, return its absolute value.
/*function absValueCalc(number){
 console.log(Math.abs(number));
}
absValueCalc(-45.67);

//Function 2 - Power Calculation: Calculate and return the value of a base raised to a specific power.
function pwrCalc(x,y){
    console.log(Math.pow(x, y));
}
pwrCalc(5,3);

//Function 3 - Square Root Finder: Calculate the square root of a number.
function sqRoot(num){
    console.log(Math.sqrt(num));
}
sqRoot(9);

//Function 4 - Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
let arrayMax = function(numArray){
    return Math.max(...numArray);        
    };
let arrayMin = function(numArray){
    return Math.min(...numArray);
};    
  let numArray = [3, 78, -12, 0.5, 27];
console.log(arrayMax(numArray), arrayMin(numArray));

//Function 5 - Random Number Generator: Generate a random integer within a specified range.
function randomNumGenerator(max, min){
    let randNum = Math.random();
    console.log(randNum);
    return randNum * (max - min) + min;
}
console.log(randomNumGenerator(50, 1));

//Function 6 - Custom Rounding: Round a number to a specified number of decimal places.
function customRound(numToRound){
    return Math.round(numToRound*100)/100;
}
console.log(customRound(23.67891));
*/
//Combine the individual functions into a single "calculator" program where the user can select an operation and input the required values.
const readline = (require('readline-sync'));

const operations = ['absolute value', 'power', 'SQRT', 'Max/Min', 'Random Number', 'Rounding'];

function getOperation(){
    let operator = readline.question("Please, choose an operation to be calculated!");
    if(!operations.includes(operator)){
        console.log("You have not chosen a listed operation.");
        getOperation();
    }else{
        console.log(operator);
    }
}

function getNumbers(){
    let
}

if (choice === "absolute value"){
    const choice = readline.question("Enter number for absolute value.");
    return function absValueCalc(number){
        console.log(Math.abs(number));
} 
} else if (choice === "power"){
    return function pwrCalc(x,y){
        console.log(Math.pow(x, y));
}
}else if (choice === "SQRT"){
    return function sqRoot(num){
        console.log(Math.sqrt(num));
}
}else if (choice === "Max/Min"){
    let arrayMax = function(numArray){
        return Math.max(...numArray);        
        };
    let arrayMin = function(numArray){
        return Math.min(...numArray);
    };    
      let numArray = [3, 78, -12, 0.5, 27];
    console.log(arrayMax(numArray), arrayMin(numArray));    
}else if (choice === "Random Number"){
    let randNum = Math.random();
    console.log(randNum);
    return randNum * (max - min) + min;
}    
console.log(randomNumGenerator(50, 1));
else (choice === "Rounding"){
    function customRound(numToRound){
        return Math.round(numToRound*100)/100;
    }
    console.log(customRound(23.67891));
}
