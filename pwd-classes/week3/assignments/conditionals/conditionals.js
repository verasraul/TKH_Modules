//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")
function greaterNum(num1, num2) {
num1 = Number(num1);
num2 = Number(num2);
return num1 > num2 ? num1 : num2;
};
// greaterNum(10, 15);
console.log(`The greater number between 10 & 15 is ${greaterNum(10, 15)}`);
console.log(`The greater number between 250 and 50 is ${greaterNum(250,50)}`);





//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works
function helloWorld(languageCode) {
  let en = "Hello World";
  let sp = "Hola Mundo";
  let du = "Hallo Mensen";

    switch (languageCode) {
      case "en":
        return en;
      case "sp":
        return sp;
      case "du":
        return du;
      default:
        // If language it not available
        return `${languageCode} is not a language available for translation, yet. Sorry!`;
    };
};
console.log(helloWorld("du"));
console.log(helloWorld("sp"));
console.log(helloWorld("en"));
console.log(helloWorld("au"));






//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works
function assignGrade(grade) {
  switch (true) {
    case grade >= 90:
        console.log(`Your grade is ${grade}, you received an "A"`);
        break;
    case grade >= 80:
        console.log(`Your grade is ${grade}, you received an "B"`);
        break;
    case grade >= 70:
        console.log(`Your grade is ${grade}, you received an "C"`);
        break;
    case grade >= 60:
        console.log(`Your grade is ${grade}, you received an "D"`);
        break;
    default:
        console.log(`Your grade is ${grade}, you received an "F"`);
      };
};

assignGrade(55);
assignGrade(65);
assignGrade(75);
assignGrade(85);
assignGrade(95);









//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"
function pluralize(noun, number) {
let stringPlural = "";
if (number > 1) {
  stringPlural = number + " " + noun + "s";
};
return stringPlural;
};
console.log(pluralize("rock", 2));
console.log(pluralize("car", 4));
console.log(pluralize("bottle", 6));