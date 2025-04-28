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
function absValueCalc(number){
 console.log(`Absolute value of ${number}: ${Math.abs(number)}`);
}

//Function 2 - Power Calculation: Calculate and return the value of a base raised to a specific power.
function pwrCalc(x,y){
    console.log(`${x} raised to the power of ${y}: ${Math.pow(x, y)}`);
}

//Function 3 - Square Root Finder: Calculate the square root of a number.
function sqRoot(num){
    console.log(`Square root of ${num}: ${Math.sqrt(num)}`);
}

//Function 4 - Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
let arrayMax = function(numArray){
    return Math.max(...numArray);        
    };
let arrayMin = function(numArray){
    return Math.min(...numArray);
};    
  
//Function 5 - Random Number Generator: Generate a random integer within a specified range.
function randomNumGenerator(min, max){
    let randNum = Math.random();
    console.log(randNum);
    return randNum * (max - min) + min;
}

//Function 6 - Custom Rounding: Round a number to a specified number of decimal places.
function customRound(numToRound){
    console.log(`Round ${numToRound} to 2 decimal places: ${Math.round(numToRound*100)/100}`);
}

//Test each function with sample inputs to ensure it works as intended.

absValueCalc(-45.67);
pwrCalc(5,3);
sqRoot(144);

let numArray = [3, 78, -12, 0.5, 27];
console.log(`Maximum Number: ${arrayMax(numArray)}, Minimum Number: ${arrayMin(numArray)}`);
console.log(`Random number between 1 and 50: ${randomNumGenerator(1, 50)}`);
customRound(23.67891);

/*
I AM STILL WORKING ON THIS PORTION, BUT WANTED TO AT LEAST SUBMIT THE TOP PORTION AS COMPLETED.

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
getOperation();

function getNumbers(){
    if(operations === "absolute value"){
    let choice = readline.question("Enter number for absolute value.");
    return choice;
    "The absolute value is:" + Math.abs(choice);
    }
}
getNumbers();
    
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
}
*/