// create a contacts array; “Steve Smith”, “Matt Davis”, and “Amy // Linn”
const contacts = ["Steve Smith", "Matt Davis", "Amy Linn"];
console.log(contacts);

// Create a father variable and assign it “Matt davis” the second element in the array.
let father = contacts[1];
//let father = "Matt Davis";

// Update the first element in the array to “Mark Williams”.
contacts.unshift("Mark Williams");
console.log(contacts);

// Use pop() to remove the last element from the array.
contacts.pop();
console.log(contacts);

// Use the push() method to add “Michelle Johnson” to the end of the array.
contacts.push("Michelle Johnson");
console.log(contacts);

// Assign the value of the length of the contacts array to a numberOfContacts Variable. 
let numberOfContacts = contacts.length;
console.log(numberOfContacts);