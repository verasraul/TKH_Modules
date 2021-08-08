// LINK TO CODE PEN:
// https://codepen.io/verasraul/pen/qBmQKqN




const full_names = ["Westley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
let separate_names = [];
let first_names = [];
let last_names = [];




// Looping through array separating each element in the array into separate strings
for (let i = 0; i < full_names.length; i++){
    separate_names.push(full_names[i].split(" ")[0])
    separate_names.push(full_names[i].split(" ")[1]);
}




// Looping through array and sending the first index of each string to thew new first_name array
for (let i = 0; i < full_names.length; i++){
    first_names.push(full_names[i].split(" ")[0]);
}




// Loops through array and sending the 2nd index of each string to the new last_name array
for (let i = 0; i < full_names.length; i++){
    last_names.push(full_names[i].split(" ")[1]);
}




console.log(separate_names); // printing new list created with the separate names
console.log(first_names); // printing new list created with the first names
console.log(last_names); // printing new list created with the last names
