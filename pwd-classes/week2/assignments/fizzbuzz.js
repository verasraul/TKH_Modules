// let x = 0
let result = " ";

for (let x = 1; x < 61; x++){
if (x % 3 === 0 && x % 5 === 0){
  result = "fizzbuzz";
  console.log(result);
  
} else if (x % 3 == 0){
  result = "fizz";
  console.log(result);
} else if (x % 5 == 0){
  result = "buzz";
  console.log(result);
} else {
  result = "x";
  console.log(result);
}};
