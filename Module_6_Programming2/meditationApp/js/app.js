// Create an 'arrow' function named 'app':
const app = () => { 
    
    // Create variables to hold all the HTML elements needed for the app:
    // variable to hold the song.
    const song = document.querySelector('.song');

    // Variable to hold the play button.
    const play = document.querySelector('.play');

    // Variable to hold the outline of 'circle' around the play button. 
    const outline = document.querySelector('.moving-outline circle');
    // 'circle' is specified in the argument because we want to tell JS to animate the path of circle element not the svg source image.
    
    // Variable to hold video.
    const video = document.querySelector('.vid-container video');

    // Create variable for all the sounds:
    const sounds = document.querySelectorAll('.sound-picker button'); // Selects all the songs in the 'sound-picker' html section.
    
    // Create variable to hold time display:
    const timeDisplay = document.querySelector('.time-display');
    
    // Create variable to store buttons fromm the 'time-select' HTML clsss:
    timeSelect = document.querySelectorAll('.time-select button');

    // Create variable to hold the length of the circle around the play button that JS will animate:
    const outlineLength = outline.getTotalLength(); // gets the lenght of the circle outline and stores it in 'outlineLength' variable.
    
    // Create variable to hold Duration time for meditation session:
    let fakeDuration = 600;

    // Animate circle around the play button to fill in as the duration wines down:
    outline.style.strokeDasharray = outlineLength; // starts circle filled in entirely to it's outline length.
    outline.style.strokeDashoffset = outlineLength; // starts filling up the circle as the duration time goes by.

    // Create function to select a different sound:
    sounds.forEach(sound =>{ // for each individual sound run this function.
        sound.addEventListener('click', function(){ // add event listener and on click run this function.
           song.src = this.getAttribute('data-sound'); // get the sound from the 'data-sound' element in the HTML.
           video.src = this.getAttribute('data-video'); // get the video from the 'data-video' element in the HTML.
           checkPlaying(song); // runs this function to play sound/video base don the icon the user clicks.
        });
    });

    // Create 'arrow' function to 'Play Sounds':
    play.addEventListener("click", () => { // Use the 'play' icon, 'addEventListener' and add 'click' listener.
        checkPlaying(song); // check if the song is playing on click.
    });

    // Create a function to stop and play the sounds:
    const checkPlaying = song =>{
        if (song.paused){ // check to see if song is paused.
            song.play(); // if song is paused then song play.
            video.play(); // play video imagg in the background along with the music.
            play.src = './svg/pause.svg'; // change the source image to the paused img.
        } else {
            song.pause(); // pause song if it was already playing.
            video.pause(); // pause video if it was already playing.
            play.src = "./svg/play.svg";
        }
    };

    // Select duration song/video to play:
    timeSelect.forEach(option => { // for each button 
        option.addEventListener('click', function(){ // whenever user clicks on one run this function.
            fakeDuration = this.getAttribute('data-time'); // gets the 'data-time' values set in the HTML file to update the duration time for the button selected.
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`; // updates the time display to reflect the 'data-time' selected above.

        })
    });


    // This function runs every time the user hits play and checking/updating the sontg time until the song stops.
    song.ontimeupdate = () => {
        // function play
        let currentTime = song.currentTime; // gets current time of the song. 
        let elapsed = fakeDuration - currentTime; // holds the elapsed time of the song. When time hits 60 it'll reset to zero(0).
        let seconds = Math.floor(elapsed % 60); // holds the seconds of the song.
        let minutes = Math.floor(elapsed / 60); // hods the minutes of the song.
        // 'Math.foor()' method returns whole number from float (1.6480 to 1).


        // Animate circle border (progress bar) around the 'play' button and check time:
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset =  progress;
        // Animate '.time-display' text:
        timeDisplay.textContent = `${minutes}:${seconds}`; // stores values of 'minutes' & 'seconds' variables created above to the 'timeDisplay' const which displays the time results in the 'time-display' <div> section.
        
        // condition to stop playing the song if the time is 0.
        if (currentTime >= fakeDuration){
            song.pause(); // pauses the song.
            song.currentTime = 0; // resets/updates the time display to zero.
            play.src = './svg/play.svg'; // changes the pause icon to play icon after the song was paused in the statment above.
            video.pause();
        }
    };
};


// Call the 'app' function created above:
app();