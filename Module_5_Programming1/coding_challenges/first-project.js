//LINK TO CODE PEN:
//https://codepen.io/vemrasraul/pen/NWjOVYm




//Creating a constant variable for the user's age
const age = parseInt(prompt("How old are you?"));




//Creating prompts to collect user data
let weekly_income = parseInt(prompt("What's your weekly income?"));
let food_cost = parseInt(prompt("How much does your weekly groceries cost?"));
let housing_cost = parseInt(prompt("How much are your weekly housing expenses?"));
let tranportation_cost = parseInt(prompt("How much does weekly transportation cost you?")); 
let other_costs = parseInt(prompt("How much are your other weekly expenses? (enter 0 if none)"));
let savings_goal = parseInt(prompt("How much you would like to save in a year?"));
let savings_weekly = savings_goal/52
let weekly_expenses = 0
let annual_income = 0




//STEP 1

//CREATING CONDITIONALS FOR EACH PROMPT

//Conditional for savings_goal prompt
if (savings_goal == null || isNaN(savings_goal) == true){
    console.log("Please enter a number...")
    savings_goal = prompt("How much would like to save in a year?");

}   else if (savings_goal == 0){
    console.log("We need a number higher than zero...");

}       else{
        console.log("In order for you to save " + "$" + savings_goal + " in a year" + "," + " your weekly savings goal should be " + "$" + savings_weekly + " a week.");
}


//Conditional for weekly_income prompt
if (weekly_income == null || isNaN(weekly_income) == true){
    console.log("Please enter a number...")
    weekly_income = prompt("How much do you make a week?");

}   else if (weekly_income == 0){
    console.log("We need a number higher than zero...")
    weekly_income = prompt("How much do you make a week?:");

}       else{
        annual_income = weekly_income*52
        console.log("You make " + "$" + weekly_income + " a week, which is " + "$" + annual_income + " a year.");
}


//Conditional for food_cost prompt
if (food_cost== null || isNaN(food_cost) == true){
    console.log("Please enter a number: ")
    food_cost = prompt("How much do you make a week?");

}   else if (food_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        console.log("Your food expenses are " + "$" + food_cost + " per week.");
}


//Conditional for housing_cost prompt
if (housing_cost == null || isNaN(housing_cost) == true){
    console.log("Please enter a number...")
    housing_cost = prompt("How much do you make a week?");

}   else if (housing_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        weekly_expenses = food_cost + housing_cost
        console.log("Your housing cost is " + "$" + housing_cost + " per week.");
}


//Conditional for transportation_cost prompt
if (tranportation_cost == null || isNaN(tranportation_cost) == true){
    console.log("Please enter a number...")
    tranportation_cost = prompt("How much do you make a week?");

}   else if (tranportation_cost == 0){
    console.log("We need a number higher than zero...");

}       else{
        weekly_expenses = food_cost + housing_cost + tranportation_cost
        console.log("Your transportation expenses are " + "$" + tranportation_cost + " per week.");
}


//Conditional for other_costs prompt 
if (other_costs == null || isNaN(other_costs) == true){
    console.log("Please enter a number...")
    other_costs = prompt("How much do you make a week?");

}   else if (other_costs == 0){
    console.log("You don't have any additional expenses at this time.");

}   else{
    weekly_expenses = food_cost + housing_cost + tranportation_cost + other_costs
    console.log("Your additional weekly expenses are " + "$" + other_costs + " per week.");
}




// STEP 2

//Adding all weekly expenses and storing the sum in weekly_expenses variable
console.log("Your weekly expenses add up to " + "$" + weekly_expenses + " per week.");




// STEP 3

//Deducting weekly expenses from weekly income
let gross_earnings = weekly_income-weekly_expenses
console.log("After deducting your expenses from your weekly earnings, you're left with " + "$" + gross_earnings + " per week.");




// STEP 4

//Creating conditional for savings goal
let amount_needed = savings_weekly-gross_earnings
if (gross_earnings < savings_weekly){
    console.log("You need to save an additional " + amount_needed + " per week, in order to reach your savings goal.");

}   else {
    console.log("You're right on track. You have enough money left to stash for your savings goal.");
}   
