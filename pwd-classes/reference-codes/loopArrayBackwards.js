let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];

const reverseLoop = (wordsArray) => {
    for (let word = lunchArray.length -1; word >= 0; word--){
        console.log(lunchArray[word]);
    };
};

reverseLoop(lunchArray);