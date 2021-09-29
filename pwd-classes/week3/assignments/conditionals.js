//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")






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

    if (languageCode == 'en'){
      return en;
      console.log(en);
    } else if (languageCode = 'sp'){
      return sp;
      console.log(sp);
    } else if ()
};

helloWorld("sp");






//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works
function assignGrade(number) {
  for (let grade = 60; grade <= 100; grade++) {
    switch (true) {
      case grade >= 90:
          console.log(`For number grade ${grade}, you get letter grade A`);
          break;
      case grade >= 80:
          console.log(`For number grade ${grade}, you get letter grade B`);
          break;
      case grade >= 70:
          console.log(`For number grade ${grade}, you get letter grade C`);
          break;
      case grade >= 60:
          console.log(`For number grade ${grade}, you get letter grade D`);
          break;
      default:
          console.log(`For number grade ${grade}, you get letter grade F`);
        };
  }
}
assignGrade();









//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"