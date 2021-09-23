let moviePhrase = "You're gonna need a bigger boat";
const favMovie = 'the shining';

switch (favMovie) {
  case 'the shining':
    moviePhrase = "All work and no play makes Jack a dull boy";
    return moviePhrase;
    break;
  case 'star wars':
    moviePhrase = "Do. Or do not. There is no try.";
    return moviePhrase;
    break;
  case 'forrest gump':
    moviePhrase = "Life was like a box of chocolates.";
    return moviePhrase;
    break;
  default:
    console.log(`Great movie choice!`);
};

console.log(favMovie);