// LINK TO CODE PEN
// https://codepen.io/verasraul/pen/YzVRver




// Data to be manipulated
let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete \
Whether cruising in aSikh\'s\ cab, or Montero Jeep I can\'t\ call it, the beats make me falling asleep I keep falling, \
but never falling six feet deep I\'m\ out for presidents to represent me, I\'m\ out for presidents to represent me, \
I\'m\ out for dead presidents to represent me, ";

let quote_array = []

let new_quote = []

let new_quote_string = ""

// STEP 1

// Split string by blankspace into an array of words
quote_array =  quote.split(" "); 



// STEP 2

// Iterate through each string, find the letter 's' and replace it with the '$' sign
for (let i = 0; i < quote_array.length; i++){
    originalword = quote_array[i];
    newwordforsmalls = originalword.replaceAll('s','$');
    newwordforbigS = newwordforsmalls.replaceAll('S', '$');
    new_quote.push(newwordforbigS);
    }

// STEP 3 

// Merge into new string quote.
for (let i = 0; i < new_quote.length; i++){
    new_quote_string = new_quote_string + new_quote[i] + " ";
}


console.log(new_quote_string);


