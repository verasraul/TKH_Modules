// Create and declare new object:
let animal = {
    name : "BIG Poppa",
    type : "Bear",
    species : "Grizzley",
    location : "Vancouver",
    color : "grey",
    // Create function to display all object's attributes in a sentence via popup in browsers:
    profileAlert: function(){
        alert("Hi, I'm " + this.name + " and I am a " + this.color + " " + this.species + " " + this.type + ", " + "from " + this.location + ".")
    },
    // Create function to display all object's attributes in a sentence via console log:
    profileLog: function(){
        console.log("Hi, I'm " + this.name + " and I am a " + this.color + " " + this.species + " " + this.type + ", " + "from " + this.location + ".")
    }, 

    // Create 'getters' to return each object attribute:
    get animalName(){
        return this.name;
    },
    get animalType(){
        return this.type;
    },
    get animalSpecies(){
        return this.species;
    },
    get animalLocation(){
        return this.location;
    },
    get animalColor(){
        return this.color;
    },

    // Create 'setters' to set NEW values to the object's atributes:
    set newName(newName){
        this.name = newName;
    },
    set newType(newType){
        this.type = newType;
    },
    set newSpecies(newSpecies){
        this.species = newSpecies;
    },
    set newLocation(newLocation){
        this.location = newLocation
    },
    set newColor(newColor){
        this.color = newColor
    },
};


animal.profileAlert()
animal.profileLog()
console.log(animal.animalName)
console.log(animal.type)
console.log(animal.animalLocation)
animal.newName = "Cola Bear"
animal.newSpecies = "Polar"
animal.newLocation = "Antartica"
animal.profileAlert()
animal.profileLog()
console.log(animal.animalName)
console.log(animal.type)
console.log(animal.animalLocation)