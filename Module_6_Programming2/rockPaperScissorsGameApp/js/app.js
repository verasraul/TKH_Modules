// Create several functions that each has their own role.
// 1. Function to compare the hands.
// 2. Functiont to update the scores.


// NOTE: Limit global variables as much as possible.
// Create a function that contains the whole game:
const game = ()=> {
    // NOTE: Think about/create variables you may need to manipulate across multiple functions.
    // Create variables to store 'player' and 'computer' scores:
    let playerScore = 0;
    let computerScore = 0;
    //NOTE: Scores are set to 0 starting the game so we can increment by 1 ('++') based on whos' winning.

    // This function will fade out the 'intro' class/section and fade in the 'match' class/section.
    const startGame = ()=> {
        // NOTE: Instead of creating global variables, restrict variables to the function in which you need them.
        // In here, all we need is two pages.
        // This variable gets & holds the 'Let's Play' '<button> tag.
        const playButton = document.querySelector('.intro button'); // NOTE; 'button' argument after 'intro' affects <button> element(s) in '.intro' class/section.
            
        // This variable gets & holds the 'intro' screen.
        const introScreen = document.querySelector('.intro'); // NOTE; no argument after 'intro' affects entire '.intro' class/section.
        
        // This variable gets & holds the 'match' screen.  
        const match = document.querySelector('.match');

        // Add event listener to listen for clicks on the 'Let's Play' <button>:
        playButton.addEventListener('click' ()=>{
            
        });
    
    }
}