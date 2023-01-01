// Part 1
class Vehicle {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  honk() {
    return "Beep"
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
  }
}

// part 2
class Car extends Vehicle {
  constructor(...args) {
    super(...args)
    this.numWheels = 4
  }
}

// part 3
class Motorcycle extends Vehicle {
  constructor(...args) {
    super(...args)
    this.numWheels = 2
  }
  
  revEngine() {
    return "VROOM!!!"
  }
}

// part 4
class Garage {
  constructor(capacity) {
    this.vehicles = []
    this.capacity = capacity
  }

  add(newVehicle) {
    // check if what is passed is a vehicle
    if(!newVehicle instanceof Vehicle) {
      return "Only vehicles are allowed in here!"
    }
    if(this.vehicles.length >= this.capacity) {
      return "Sorry, we're full"
    }
    this.vehicles.push(newVehicle)
    return "Vehicle added"
  }
}