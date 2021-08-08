// LINK TO CODE PEN:
// https://codepen.io/verasraul/pen/MWmzpEB




//Creating grading prompt
let what_grade = prompt("What was your final gade?");




//Creading check for number and blank inputs
if (what_grade == ""){
    console.log("Grade cannot be blank...");
    what_grade = prompt("What was your final gade?");
}
    else if(isNaN(what_grade) == true){
    console.log("Grade must be a number from 0-100...")
    what_grade = parseInt(prompt("What was your final gade?"));

}   
else {
    what_grade;
}




//Creating conditionals for each grade
if (parseInt(what_grade) > 95){
    console.log("You received an \"A+\".");
}
    else if (parseInt(what_grade) > 88 && parseInt(what_grade) <= 90 ){
        console.log("You received an \"A\".");
    }
    else if (parseInt(what_grade) > 84 && parseInt(what_grade) <= 88){
        console.log("You received a \"B+\".");
    }
    else if(parseInt(what_grade) > 76 && parseInt(what_grade) <= 84){
        console.log("You received a \"C+\".");
    }
    else if(parseInt(what_grade) > 70 && parseInt(what_grade) <= 76){
        console.log("You received a \"C\".");
    }
    else if(parseInt(what_grade) > 67 && parseInt(what_grade) <= 70){
        console.log("You received a \"D+\".");
    }
    else if(parseInt(what_grade) > 64 && parseInt(what_grade) <= 67){
        console.log("You received a \"D\".");
    }
    else{
        parseInt(what_grade) <= 64;
        console.log("You received an \"F\".");
    }