
// let testString = "Burger  Salad  Lasagna  Sushi  Meatloaf";
// let lunchArrayString = ["Burger  Salad  Lasagna  Sushi  Meatloaf"];
// let tempArray = testString.split(" ");

// let filtered = tempArray.filter(function (i) {
//   return i != "";
// });
// console.log(`${filtered} type=${typeof filtered}`);

// let longestWord = " ";
// for (let i = 0; i < filtered.length; i++) {
//     for (let word = i -1; word >= 0; word--) {
//         if ((filtered[i].length > filtered[word].length)){
//             longestWord = filtered[i];
//             // return longestWord;
//         }
//         // else if ((filtered[i].length > filtered[word].length) * 1){
//         //     longestWord = filtered[i];
//         //     // return longestWord;
//         // };
//     };
// };
// console.log(`The longest words in the array are \"${longestWord}.\" they contain ${longestWord.length}, characters.`);
// // };






let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
// let lunchArray = ["Burger  Salad  Lasagna Sushi  Meatloaf"];
let lunchArrayString = ["Burger  Salad  Lasagna  Sushi  Meatloaf"];
let testString = "THIS  IS  JUST A  TEST  ";
const carArray = ["Bentley", "BMW", "McClaren", "Mercedez-Benz", "Ferrari", "Lamborghini"];

const getLongestString = (words) => {
    const longestWord = () => {
        // let 
        let longestWordStr = " ";
        for (let i = 0; i < words.length; i++) {
                const element = words[i];
            for (let word = i -1; word >= 0; word--) {
                if ((words[i] >= words[word])){
                    longestWordStr += words[i].toString();
                    // longestWord = longestWord.toString();
                    // return longestWord;
                };
            };
        };
        console.log(`The longest word in the ${typeof words} is \"${longestWordStr}.\" It contains ${longestWord.length} characters.`);
    };
    const stringToArray = (words) => {
        let tempArray = words.split(" ");
        // console.log(`'tempARRAY'===${tempArray} type=${typeof tempArray}`); 
        let wordsfiltered = tempArray.filter(function (i) {
            return i != "";
        });
        console.log(`FILETERED==${wordsfiltered} type==${typeof wordsfiltered}`);
        console.log(wordsfiltered);
        // return wordsfiltered;
    };
    if ((typeof words == "string")) {
        // let newStrArray = stringToArray(words);
        longestWord(stringToArray(words));
        // let tempArray = words.split(" ");
        // // console.log(`'tempARRAY'===${tempArray} type=${typeof tempArray}`); 
        // let wordsfiltered = tempArray.filter(function (i) {
        //     return (i != "");
        // }); 
        // console.log(`wordsFiltered====${wordsfiltered}`)
        // longestWord(wordsfiltered);
        // console.log(`Words Filtered ${wordsfiltered} type==${typeof wordsfiltered}`);
        // // // console.log(wordsfiltered);
        // // console.log("longestWord " + longestWord(wordsfiltered));
    };
    if ((typeof words == "object")) {
        console.log(`Type of 'word' is===${typeof words}`);
        longestWord(words);
        };
};
console.log(":::testString:::")
getLongestString(testString);
// console.log(" this is testString = " + getLongestString(testString));
// console.log(`lunchArray===${getLongestString(lunchArray)}`);
console.log(":::lunchArrayString:::")
getLongestString(lunchArrayString);
// console.log(`lunchArrayString===${getLongestString(lunchArrayString)}`);
console.log(":::carArray:::")
getLongestString(carArray);
// console.log(`carArray===${getLongestString(carArray)}`);
console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")