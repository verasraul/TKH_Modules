

function fight(){
    let monster = prompt("What is the name of the monster figting?")
    let hero = prompt("What is the name of the hero fighting?")
    let monsterHealth = 50;
    let heroHealth = 50;
    let heroDiceRoll = Math.floor(Math.random() * 20);
    console.log("herodiceroll= " + heroDiceRoll);
    let monsterDiceRoll = Math.floor(Math.random() * 20);
    console.log("monsterdiceroll= " + monsterDiceRoll);
    console.log("monsterdiceroll= " + (monsterDiceRoll*2-6));
    let round = 1



    while ((monsterHealth >= 0) && (heroHealth >= 0)) {
      monsterDiceRoll+=2;
      // console.log("monsterdiceroll beginning while= " + monsterDiceRoll);
      heroDiceRoll+=2;
      // console.log("heroDiceRoll beginning while = " + heroDiceRoll);
      round ++;
        if ((heroDiceRoll === 1 || heroDiceRoll === 2)) {
          heroHealth -= 5;
          alert(`Oops! ${hero} accidentally stabed themselves. -${heroHealth}`);
        }
      else if ((heroDiceRoll) >= 3 && (heroDiceRoll <= 10)) {
          alert(`${hero} missed! ${heroHealth}`);
        }
        else if ((heroDiceRoll >= 11) && (heroDiceRoll <= 18)) {
          monsterHealth -= 10;
          alert(`Significant damage done to ${monster}! -${monsterHealth}`);
        }
        else if ((heroDiceRoll === 19) || (heroDiceRoll === 20)) {
          monsterHealth -= 20;
          alert(`Critical hit to ${monster}! -${monsterHealth}`);
        }
        if ((monsterDiceRoll === 1) || (monsterDiceRoll === 2)) {
          heroHealth -= 5;
          alert(`Oops! ${monster} accidentally stabed themselves. -${monsterHealth}`);
        }
        else if ((monsterDiceRoll >= 3) && (monsterDiceRoll <= 10)) {
          alert(`${monster} missed! ${monsterHealth}`);
        }
        else if ((monsterDiceRoll >= 11) && (monsterDiceRoll <= 18)) {
          heroHealth -= 10;
          alert(`Significant damage done to ${hero}! -${heroHealth}`);
        }
        else if ((monsterDiceRoll === 19) || (monsterDiceRoll === 20)) {
          heroHealth -= 20;
          alert(`Critical hit! to ${hero} -${heroHealth}`);
        } else {
          alert(`Round ${round}`);
          monsterDiceRoll*21;
          // console.log("monsterdiceroll ending in else= " + monsterDiceRoll);
          heroDiceRoll*21;
          // console.log("heroDiceRoll ending in else= " + heroDiceRoll);
        };
    // };
  };
};
fight();