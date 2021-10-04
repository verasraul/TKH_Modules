// 1) Given the array,
    // Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
    // Loop through the array to find the longest word by how many letters each string contains.
    // Which other variables will you be needing?
// 2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.  
// 4) Now what if the array was 
    // Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
    // Since all the words are in one string together, how would you solve this? 
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
// let lunchArray = ["Burger  Salad  Lasagna Sushi  Meatloaf"];
let lunchArrayString = ["Burger  Salad  Lasagna  Sushi  Meatloaf"];

const longestWord = (wordsArray) => {
    let longestWord = " ";

    for (let i = 0; i < wordsArray.length; i++) {
        for (let word = i -1; word >= 0; word--) {
            if ((wordsArray[i].length > wordsArray[word].length)){
                longestWord = wordsArray[i];
            };
        };
    };
    console.log(`The longest word in the array is \"${longestWord}.\" It contains ${longestWord.length} characters.`);
};
const carArray = ["Bentley", "BMW", "McClaren", "Mercedez-Benz", "Ferrari", "Lamborghini"];
longestWord(lunchArray);
longestWord(carArray);

const stringToArray = (word) => {
    let stringArray = Array.from(word);
    // let stringArray = [...word];
    console.log(`This the new string array: ${stringArray}`);
};
stringToArray(lunchArrayString);




// Write a function that returns elements on odd positions in a list:
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const oddElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (isNaN(element)){
            let oddWords = array.filter(a => a.length%2);
            console.log(`These are the odd elements in the array: ${oddWords} `);
            return oddWords;
        } else {
            let oddNum = array.filter(a => a%2);
            console.log(`These are the odd elements in the array: ${oddNum} `);
            return oddNum;
        };
    };
};
oddElements(lunchArray);
oddElements(numArray);
oddElements(carArray);




// Compute the factorial of any given number.
// let number = 4; //integer is any factorized number 
const factorial = (integer) => {    
    let answer = 1;
    if (integer == 0 || integer == 1) {
      return answer;
    }
    else {
      for (let i = integer; i >= 1; i--){
        //   console.log(answer);
        answer = answer * i;
      }
      return answer;
    }
  };
console.log(`The factorial of 4 is ${factorial(4)}`);
console.log(`The factorial of 8 is ${factorial(8)}`);
console.log(`The factorial of 12 is ${factorial(12)}`);





// Conditional Practice
// Write an if statement and determine a condition where: 
const gallonMiles = (speed) => {
    speed = Number(speed);

    // If mpg is less than or equal to 10, console “gas guzzler”
    if (speed <= 10) {
        console.log("Gas guzzler.");
    }
    // If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
    else if ((speed >= 11) && (speed <= 16)){
        console.log("Planet still frowns upon this, and so does your wallet.");
    }
     // If mpg is between 17-20, console “ it’s palpable”
    else if ((speed >= 17) && (speed <= 20)) {
        console.log("It’s palpable.");
    }
    // If mpg is between 21-29, console “ Atmosphere smiles at your decision”
    else if ((speed >= 21) && (speed <=29)){
        console.log("Atmosphere smiles at your decision");
    }
    // If mpg is between 30-35, console “ Not many gas stops will be taken”
    else if ((speed >= 30) && (speed <= 35)) {
        console.log("Not many gas stops will be taken");
    }
    // If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
    else if ((speed == 120)) {
        console.log("If you are using the Tom Ogle fuel system, props");
    }
    // If mpg is above 35 console “ The fish of the sea smile at your conservation”
    else if ((speed >= 35)) {
        console.log("The fish of the sea smile at your conservation");
    };
};
// After testing each one, change the mpg variable to ensure it is good.
gallonMiles(1);
gallonMiles(12);
gallonMiles(19);
gallonMiles(31);
gallonMiles(120)
gallonMiles(125);