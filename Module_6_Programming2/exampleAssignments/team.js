let team = {
    name : "Knicks",
    city : "New York City",
    sport : "basketball",
    league : "NBA",
    division : "Atlantic",
    conference : "Eastern",
    stadium : "Madison Square Garden",
    stadiumLocation : "New York City",
    owner : "James Dolan",
    president : "Leon Rose",
    GM : "Scott Perry",
    coach : "Tom Thibodeau",
    profile : function(){
        console.log("We are the " + this.city + " " + this.name + ". We play in the " + this.league + " at the " + this.stadium + " for the " + this.division + " division of the " + this.conference + " conference. "
        + "Our owner is " + this.owner + ", our team president is " + this.president + ", our GM is " + this.GM + " and our head coach is the great " + this.coach + ".")
    },
    profileAlert : function(){
        alert("We are the " + this.city + " " + this.name + ". We play in the " + this.league + " at the " + this.stadium + " for the " + this.division + " division of the " + this.conference + " conference. "
        + "Our owner is " + this.owner + ", our team president is " + this.president + ", our GM is " + this.GM + " and our head coach is the great " + this.coach + ".")
    },
    get teamName(){
        return this.name;
    },
    get teamCity(){
        return this.city;
    },
    get teamSport(){
        return this.sport;
    },
    get teamLeague(){
        return this.league;
    },
    get teamDivision(){
        return this.division;
    },
    get teamConference(){
        return this.conference;
    },
    get teamStadium(){
        return this.stadium;
    },
    get teamStadiumLocation(){
        return this.stadiumLocation;
    },
    get teamOwner(){
        return this.owner;
    },
    get teamPresident(){
        return this.president
    },
    get teamGM(){
        return this.GM;
    },
    get teamCoach(){
        return this.coach;
    },
    set newName(newName){
        this.name = newName;
    },
    set newCity(newCity){
        this.city = newCity;
    },
    set newSport(newSport){
        this.sport = newSport;
    },
    set newLeague(newLeague){
        this.league = newLeague;
    },
    set newDivision(newDivision){
        this.division = newDivision;
    },
    set newConference(newConference){
        this.conference = newConference;
    },
    set newStadium(newStadium){
        this.stadium = newStadium;
    },
    set newStadiumLocation(newStadiumLocation){
        this.stadiumLocation = newStadiumLocation;
    },
    set newOwner(newOwner){
        this.owner = newOwner;
    },
    set newPresident(newPresident){
        this.president = newPresident;
    },
    set newGM(newGM){
        this.GM = newGM;
    },
    set newCoach(newCoach){
        this.coach = newCoach;
    },
};

team.profile()
team.profileAlert()
console.log(team.teamName)
console.log(team.teamCity)
console.log(team.teamStadium)
console.log(team.teamConference)
console.log(team.teamCoach)
team.newName = "Lakers"
team.newCity = "Los Angeles"
team.newStadium = "Staples Center"
team.newConference = "Western"
team.newDivision = "Pacific"
team.newOwner = "The Buss Family Trust"
team.newPresident = "Jeanie Buss"
team.newGM = "Rob Pelinka"
team.newCoach = "Frank Vogel"
team.profile()
team.profileAlert()
console.log(team.teamName)
console.log(team.teamCity)
console.log(team.teamStadium)
console.log(team.teamConference)
console.log(team.teamCoach)