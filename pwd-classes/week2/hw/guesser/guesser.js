function letterGuesser() {
    let abc = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(`THIS IS \"ABC\": ${abc}`);
    let randInt = Math.floor(Math.random() * abc.length);
    console.log(`This is ranInd: ${randInt}, is a ${typeof randInt}`);
    let randLet = abc[randInt];
    console.log(`This is randLet: ${randLet}, is a ${typeof randLet}`);
    let userPrompt = prompt(`Your letter is \"${randLet}\", can you guess ${randLet}'s index number?: `);


        if (isNaN(userPrompt)) {
            alert("THIS IS NOT A NUMBER");
        } else if (userPrompt != randInt) {
                alert(`You need to learn your ABC's, the index \"${randLet}\" is ${randInt}.`);
        } else if (userPrompt == randInt) {
            alert ("YOU'RE A GENIUS AT THE ALPHABET!");
        } else if (isNaN(userPrompt)) {
            userPrompt;
        };
};

letterGuesser();