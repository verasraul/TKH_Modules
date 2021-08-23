// Create several functions that each has their own role:
    // Function to compare the hands.
    // Functiont to update the scores.


// NOTE: Limit global variables as much as possible.
// Create a function that contains the whole game:
const game = ()=> {
    // NOTE: Think about/create variables you may need to manipulate across multiple functions.
    // Create variables to store 'player' and 'computer' scores:
    let playerScore = 0;
    let computerScore = 0;
    //NOTE: Scores are set to 0 starting the game so we can increment by 1 ('++') based on whos' winning.

    // This function will fade out the 'intro' class/section and fade in the 'matchScreen' class/section.
    const startGame = ()=> {
        // NOTE: Instead of creating global variables, restrict variables to the function in which you need them.
        // In here, all we need is two pages.
        // This variable gets & holds the 'Let's Play' '<button> tag.
        const playButton = document.querySelector('.intro button'); // NOTE; 'button' argument after 'intro' affects <button> element(s) in '.intro' class/section.
            
        // This variable gets & holds the '.intro' screen.
        const introScreen = document.querySelector('.intro'); // NOTE; no argument after 'intro' affects entire '.intro' class/section.
        
        // This variable gets & holds the 'matchScreen' screen.  
        const matchScreen = document.querySelector('.matchScreen');

        // Add event listener to listen for clicks on the 'Let's Play' <button>:
        playButton.addEventListener('click', ()=>{ // Every time user 'clicks' on 'Let's Play' <button> run this function:
            introScreen.classList.add('fadeOut'); // Fade-out '.intro' screen.
            matchScreen.classList.add('fadeIn'); // Fade-in the '.matchScreen' screen to start game.
        });
    };

    // Create function to play game:
    const playMatch = () => {
        // Create a variable that gets and holds all the <buttons> in the '.options' class.
        const options = document.querySelectorAll('.option button');
        // Create variables to get and hold the player and computer hands:
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // Create a variable that holds the computer options:
        const computerOptions = ['rock', 'paper', 'scissors'];

        // Loop through each button:
        // NOTE: When using 'arrow ()=>' functions, you can eliminate the extra inner parenthesisi '()' if there's only one parameter/argument. 
        options.forEach(option=>{ // loop through each <button> in the '.option' class and for each option, run this function:


        });

        // Create function that generates a random number and based on that number index, select an option in 'computerOptions'.
        const computerRandomeIndexChoice = Math.floor(Math.random() * 3); // selects a random number between 0 up to 3. Including 0 but NOT 3.
        
        
        // // Call the 'computerOptions' variable and add the 'computerRandomIndexChoice' variable as the index number:
        // computerOptions[computerRandomeIndexChoice]
    };

    // Call all of the inner-funcions created above;
    startGame();
    playMatch();
};


// Call the main function to start the game:
game();