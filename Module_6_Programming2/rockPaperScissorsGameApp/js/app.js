// Create several functions that each has their own role:
    // Function that holds entire game.
    // Function that starts the game using the '.intro' div class.
    // Function that starts the game play using '.match' div class.
    // Function to compare the hands.
    // Functiont to update the scores.


// Create a function that contains the entirr game itself:
    // NOTE: Limit global variables as much as possible. Restrict variables to the function in which you need them.
const game = ()=> {
    // NOTE: Create variables you may need to manipulate across multiple functions. These will act like global variables inside this 'game()' function.
    // Create variables to store 'player' and 'computer' scores:
    let playerScore = 0;
    let computerScore = 0;
    //NOTE: Scores values are set to 0 starting the game so we can increment by 1 ('++') based on whos' winning.

    
    
    // START GAME:
    // This function starts the game by fading out the 'intro' <div>class & fading in the 'matchScreen' <div>class.
    const startGame = ()=> {  
        // Get the 'Let's Play'<button> from  the'intro' <div>class inside HTML & hold it in 'playButton' variable.
            // NOTE: '.querySelector()' method gets single elements from HTML to manipulate with JS.
        const playButton = document.querySelector('.intro button'); // The 'button' argument after 'intro' affects <button> element(s) in '.intro' class/section.     
        // Get the 'intro' <div>class & hold in the 'introScreen' variable.
        const introScreen = document.querySelector('.intro'); // NOTE: no argument after 'intro' affects entire '.intro' <div>class.
        // Get 'matchScreen' <div>class & hold it in the 'matchScreen' variable.  
        const matchScreen = document.querySelector('.matchScreen');

        
        
        // FADE IN/OUT EFFECT: 
        // Add event listener to listen for a 'click' on the 'Let's Play'<button>:
        playButton.addEventListener('click', ()=>{ // Every time there's a 'click' on 'Let's Play'<button> run this function():
            introScreen.classList.add('fadeOut'); // Adds "fadeOut" to 'intro' <div>class list to fade-out <div> at the start of game.
            matchScreen.classList.add('fadeIn'); // Adds "fadeIn" to 'matchScreen' <div>class list to fade-in <div> to start play.
                // Note: 'matchScreen' variable holds the '.matchScreen' <div> which starts with being faded out.
            // NOTE: 'fadeIn'/'fadeOut' <div> effects are referencing the div.fadeIn & div.fadeOut styles/effects created in the stylsheet(CSS).
        });
    };


    
    
    // PLAY GAME:
    // This function runs the game play:
    const playMatch = ()=> {
        // Get & hold all the <buttons> in the '.options' class inside HTML.
            // NOTE: while the '.querySelector()' method gets single elements, '.querySelectorAll()' gets all elemnets inside a <div>class from HTML.
        const options = document.querySelectorAll('.option button');
        
        // Get & hold the player hand image from '.player-hand' <img>class inside HTML:
        const playerHand = document.querySelector('.player-hand');
        
        // Get & hold the omputer hand imag from '.computer-hand' <img>class inside HTML:
        const computerHand = document.querySelector('.computer-hand');
        
        // Create a variable that holds an array of computer options to choose from:
        const computerOptions = ['rock', 'paper', 'scissors'];

        
        
        // RESET ANIMAIONS:
        // Get all hand images from HTML 'hands' <div>class & store them in the 'hands' variable:
        const hands = document.querySelectorAll('.hands img');
        // Run a function for each hand image:
        hands.forEach(hand => {
            // For each hand add an event listener that listens/waits for the animation to end & then runs a function:
            hand.addEventListener('animationend', function() { // NOTE: 'animationend' event is fired when a CSS Animation has completed.
                this.style.animation = ""; // 'this' keywors is referencing the 'hands' variable. 
                // After animation ends set it's value to an empty string to reset animations.
            });
        });


        
        
        // LOOP THROUGH EACH BUTTON:
            // NOTE: When using 'arrow ()=>' functions, you can eliminate the extra inner parenthesisi '()' if there's only one parameter/argument. 
        options.forEach(option=>{ // loop through each <button> in the '.option' class and for each option, run this function:
            option.addEventListener('click', function() { // add an event listener for each <button> and on 'clicks' run this:
                /* NOTE: For scopoing reasons, in this event we used a normal function instead of an arrow function because if we used an arrow function, 
                         the keyword 'this' will not connect to parameters inside this function.*/
                // Computer's player options:
                    // Create function that generates a random number and based on that number index, select an option in 'computerOptions'.
                const computerRandomIndexChoice = Math.floor(Math.random() * 3); // selects a random number between 0 up to 3. Including 0 but NOT 3.
                
                /* Create variable that calls the 'computerOptions' array above which contain the player options. 
                   Then add the random number generated by 'computerRandomIndexChoice' variable as the index number
                   to select a random option out of the array: */
                const computerChoice = computerOptions[computerRandomIndexChoice];
                
                
                
                // Set a timeout to update/ images after animations run:
                    // NOTE: 'setTimeout' takes a function as the first parameter & second parameter is the time, how long you'd like to delay the function.
                setTimeout(() => {
                    // Compare the hands by calling the 'compareHands' function:
                    // NOTE: '.textContent()' method gets or sets text values inside HTML class.
                    /* In here we are calling the 'compareHands' function the passing the value of the <button> user 'clicks' and 
                    the random value for the computer's choice created above. */
                    compareHands(this.textContent, computerChoice);
                    // Updates the images:
                    // Update player's hand image in the '.hands' class according to the <button> user 'clicks' in the event listener:
                    playerHand.src = `./images/${this.textContent}.png`;
                    // Update computer's hand image in the '.hands' class according to the random selection in computerChoice variable:
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000); // The time is declared in milliseconds.
                    /* NOTE: since the animations ('.style.animation') will run for 2 seconds, we set the time out duration for 2 seconds.
                       This pauses the 'compareHands' function() while the animations run & then calls 'compareHands' function() after
                       the time out duration time has completed. */



                // Get animations from CSS:
                    /* NOTE: 'object.style.animation' is a DOM Styling property. In this case the 'object' is 'playerHand' & 'computerHand' variables 
                              which contain the images in '.player-hand' & '.computer-hand' classes from HTML. */
                // Set the animation properties for 'playerHand' images:
                playerHand.style.animation = "shakePlayer 2s ease";
                
                // Set the animation properties for 'computerrHand' images:
                computerHand.style.animation = "shakeComputer 2s ease"; // set the animation properties to 'computerrHand' images:
                    // NOTE: Once the animations run, they do not run again when a user clicks. A function needs to be created to reset animations.

                
            });
        });
    };
    


        
        // Create a function that updates the score:
        const updateScore = ()=>{
            
            // Get the 'player-score' class from HTML and hold it in 'userScore' variable:
                // NOTE: The 'p' argument gets the values from <p> tags inside the HTML class.
            const userScore = document.querySelector('.player-score p');
            
            // Get the value of <p> tags inside 'computer-score' class and hold it in 'computerScore' variable:
            const machineScore = document.querySelector('.computer-score p');
            
            // Set 'userScore' to updated 'payerScore':
                // NOTE: use '.textContent()' method to get or set values to the <p> tags section inside the classes: 
            userScore.textContent = playerScore;
            // Set 'machineScore' to updated 'computerScore':
            machineScore.textContent = computerScore;
        };
    

        
        // Create a function to compare both 'player-hand' & 'computer-hand':
        const compareHands = (playerChoice, computerChoice) => { 
            // 'playerChoice' & 'computerChoice' are the arguments/values being passed to the function.
            
            // Get the ".winner" <h>class & store it in the 'winner' variable:
            const winner = document.querySelector(".winner");

            
            // Set a condition that checks for a tie:
            if (playerChoice === computerChoice){
                winner.textContent = "It's a tie!";
                return; // NOTE: 'return' ends the function once the block is ran.
            }
            
            
            // Set a condition that checks for "rock":
            if (playerChoice === "rock"){ 
                // If user is rock, check if the computer is scissors:
                if (computerChoice === 'scissors'){ 
                    // If the computer is scissors, write 'Player Wins' inside ".winner" <h>class of the HTML/page which displays the text:
                    winner.textContent = 'Player Wins';
                    // Increment 'playerScore' by +1:
                    playerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    // Return new values & exit condition:
                    return;
                // Otherwise, if the computer is anything else (paper), print 'Computer Wins':
                }else{
                    winner.textContent = "Computer Wins";
                    // Increment 'computerScore' by +1:
                    computerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    // Return new values & exit condition:
                    return;
                }
            }
            
            
            // Set a condition that checks for "paper":
            if (playerChoice === "paper"){ 
                // If user is 'paper', check if the computer is scissors:
                if (computerChoice === 'scissors'){ 
                    // if the computer is scissors, print 'Player Wins' inside ".winner" <h>class of the HTML/page which displays the text:
                    winner.textContent = 'Comuter Wins';
                    // Increment 'computerScore' by +1:
                    computerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    // Return new values & exit condition:
                    return;
                // Otherwise, if the computer is anything else (rock), print 'Computer Wins':
                }else{
                    winner.textContent = "Player Wins";
                    // Increment 'playerScore' by +1:
                    playerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    // Return new values & exit condition:
                    return;
                }
            }

            
            // Set a condition that checks for "scissors":
            if (playerChoice === "scissors"){ 
                // If user is 'scissors', check if the computer is 'paper':
                if (computerChoice === 'paper'){ 
                    // if the computer is paper, print 'Player Wins' inside ".winner" <h>class of the HTML/page which displays the text:
                    winner.textContent = 'Player Wins';
                    // Increment 'playerScore' by +1:
                    playerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    return;
                }else{
                    // Otherwise, if the computer is anything else (rock), print 'Computer Wins':
                    winner.textContent = "Computer Wins";
                    // Increment 'computerScore' by +1:
                    computerScore++;
                    // Call 'updateScore' function to update new score:
                    updateScore();
                    return;
                };
            };
        };

    
    // Call all of the inner-funcions created above;
    startGame();
    playMatch();
};


// Call the main function to start the game:
game();