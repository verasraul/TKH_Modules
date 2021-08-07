//Creating prompts to collect user data
let weekly_income = prompt("What's your weekly income?: ");
let food_cost = prompt("How much does your groceries cost?: ");
let housing_cost = prompt("How much are your housing expenses?: ");
let tranportation_cost = prompt("How much does transportation cost you?: "); 
let other_costs = prompt("Do you have any other outstanding expenses?: ");
let savings_goal = prompt("How much would like to save in a year?: ")
let weekly_expenses = ""




//Creating a constant variable for the user's age
const age = parseInt(prompt("age: "));



//Creating conditionals for each prompt



//Conditional for savings_goal prompt
if (savings_goal == null || isNaN(savings_goal) == true){
    console.log("Please enter a number: ")
    savings_goal = prompt("How much would like to save in a year?: ");

}   else if (savings_goal == 0){
    console.log("We need a number higher than zero...");

}       else{
        console.lgo(savings_goal/52);
}



//Conditional for weekly_income prompt
if (weekly_income == null || isNaN(weekly_income) == true){
    console.log("Please enter a number: ")
    weekly_income = prompt("How much do you make a week?:");

}   else if (weekly_income == 0){
    console.log("We need a number higher than zero...");

}       else{
        weekly_expenses = w
        console.log(weekly_expenses);
}



//Conditional for food_cost
if (food_cost== null || isNaN(food_cost) == true){
    console.log("Please enter a number: ")
    food_cost = prompt("How much do you make a week?:");

}   else if (food_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        food_cost = w
        console.log(food_cost);
}



//Conditional for housing_cost
if (housing_cost == null || isNaN(housing_cost) == true){
    console.log("Please enter a number: ")
    housing_cost = prompt("How much do you make a week?:");

}   else if (housing_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        housing_cost = w
        console.log(housing_cost);
}



//Conditional for transportation_cost
if (tranportation_cost == null || isNaN(tranportation_cost) == true){
    console.log("Please enter a number: ")
    tranportation_cost = prompt("How much do you make a week?:");

}   else if (tranportation_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        tranportation_cost = w
        console.log(tranportation_cost);
}



//Conditional for other_costs
if (other_costs == null || isNaN(other_costs) == true){
    console.log("Please enter a number: ")
    other_costs = prompt("How much do you make a week?:");

}   else if (other_costs == 0){
    console.log("We need a number higher than zero...");

}       else{
        other_costs = w
        console.log(other_costs);
}