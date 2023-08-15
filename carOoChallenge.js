// Part One & part two

class myFirstVehicle {
    constructor(make, model, year){
this.make =  make;
this.Model = model;
this.Year =  year;
this.numOfWheels = [];
}
honk() {
    return "Beep";    
}

toString(){
    return`the vehicle is a ${this.make}, ${this.model} and ${this.year}.`;
 }
}
// part two
class myFirstCar extends myFirstVehicle{
 constructor(make,model,year){
    super(make,model,year);
    this.numOfWheels = 4;
 }
}
// Part Three
class myFirstMotorcycle extends myFirstVehicle{
 constructor(make,model,year){
    super(make,model,year)
    this.numOfWheels=2;
 }
}
// part four
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

