let car = {
    brand : "McLaren",
    model : "650s",
    year : "2015",
    type : "coupe",
    color : "blue",
    doors : "2",
    price : "$265,500",
    maxSpeed : "207mph",
    profile: function(){
        console.log("This is a " + this.color + " " + this.brand + " " + this.model + " from " + this.year + ". It's a " + this.doors + "-door " + this.type + " with a top speed of " + this.maxSpeed + ", worth upwards of " + this.price + ".")
    },
    profileAlert: function(){
        alert("This is a " + this.color + " " + this.brand + " " + this.model + " from " + this.year + ". It's a " + this.doors + "-door " + this.type + " with a top speed of " + this.maxSpeed + ", worth upwards of " + this.price + ".")
    },
    get carBrand(){
        return this.brand;
    },
    get carModel(){
        return this.model;
    },
    get carYear(){
        return this.year;
    },
    get Type(){
        return this.year + " " + this.brand + " " + this.model + " " + this.type + " in " + this.color + "."
    },
    get carColor(){
        return this.color;
    },
    get carDoors(){
        return this.doors;
    },
    get carCost(){
        return this.price;
    },
    set newBrand(newBrand){
        this.brand = newBrand;
    },
    set newModel(newModel){
        this.model = newModel;
    },
    set newYear(newYear){
        this.year = newYear;
    },
    set newType(newType){
        this.type = newType;
    },
    set newColor(newColor){
        this.color = newColor;
    },
    set newDoors(newDoors){
        this.color = newDoors;
    },
    set newPrice(newPrice){
        this.price =newPrice;
    },
};



car.profile()
car.profileAlert()
console.log(car.Type)
console.log(car.carCost)
car.newBrand = "beater Ford"
car.newType = "Focus"
car.newColor = "red"
car.newYear = "2008"
car.newPrice = "$1500"
car.profile()
console.log(car.Type)
car.profileAlert()
console.log(car.carCost)
