// How do you create a private variable in Javascript?
        let variable = "value";
// Explain your reasoning behind this
        // you can use the let or the va keywords but var is the older way of doing it as of ES6 it is recommended to let to declaer variables.

// function secretVariable() {
// let private = “classified stuff”;
// }

        let people = ["Steve", "Michael", "Paul" ,"Samantha", "George"];
// Write a function that only outputs  a string with a length of 4 or less. 
// You must pseudo code it next to your answer. 
        const strOutput = (array) => {  // create a function named strOuput that takes one argument 'array'
            for (let index = 0; index < array.length; index++) { //loop through each index in the array.
                const element = array[index]; // store the index value in a variable called element.
                if (element.length <= 4){ // if the lenght of the string in element variable is shorter than 4 pring the name.
                    console.log(element);
                }
                else { // otherwise just return the value.
                    return console.log(element);
                }
            }
        }
        strOutput(people);

// Explain an anonymous function , and write an example of one. 
        // An anonymous function is basicaly a function without a name.
        // Ex:
        //     let thisFunc = function () {
        //         console.log('this is a anonymous function example.');
        //     };
            
        //     show();
// Using Reduce,  Turn an array of numbers into a total of all the numbers 
// You must pseudo code your reasoning. 
// function total(arr){
// // your code here
// }
// console.log(total[1,2,3]));   output should be 6.
 
// What is the difference between null and undefined? 
        // Null is an actual value that means nothing or the value of empty space where as void is like a voided points to data that is stored or was stored in a different location.