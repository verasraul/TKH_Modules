//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
for (let i = 0; i < 10; i++) {
    console.log(`${i} x 9 = ${i * 9}`);
    
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let n = 0
while (n < 50) {
    console.log(`${n += 5}`);
};

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function duplicateNumber(numbers) {
    // array = [];
    let newArray = [];
    let numChar = " ";

    for (let i = 0; i < numbers.length; i++) {
         newArray.push(numbers[i]);
        //  console.log(numbers[i]);
         for (let j = i -1; j >= 0; j--) {
            //  const element = array[j];
            if (numbers[i] === numbers[j]) {
                console.log((numbers[i]));
            }   
         }
    };
    // console.log(newArray);
}
duplicateNumber([2,7,5,9,8,7,6,3,4,1]);

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(grade) {
    for (let number = 60; number <= 101; number++) {
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
    }
  }
  assignGrade();