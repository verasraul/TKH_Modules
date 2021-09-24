let launchReady = false;
let fuelLevel = 21000;
let crewStatus = true;
let computerStatus = 'green';
let takeOff = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   // launchReady = true;
   takeOff = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   // launchReady = false;
   takeOff = false;
}
console.log(takeOff);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}
console.log(launchReady);

if (takeOff === true) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}