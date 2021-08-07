//Creating prompts to collect user data
let weekly_income = prompt("What's your weekly income?: ");
let food_cost = prompt("How much does your groceries cost?: ");
let housing_cost = prompt("How much are your housing expenses?: ");
let tranportation_cost = prompt("How much does transportation cost you?: "); 
let other_costs = prompt("Do you have any other outstanding expenses?: ");
let savings_goal = prompt("How much would like to save in a year?: ")

//Creating a constant variable for the user's age
const age = parseInt(prompt("age: "));

if (savings_goal == null || isNaN(savings_goal) == true){
    console.log("Please enter a number: ")
    savings_goal = prompt("How much would like to save in a year?: ");

}  else if (savings_goal == 0){
    console.log("We need a number higher than zero...");

}  else{
    savings = savings_goal/52

}

console.log(savings);
