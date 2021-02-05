class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('Honk Honk');
  }
}
//vehicle is the Super or parent class
const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();

//overridden a method on the child class
class Car extends Vehicle {
  drive(): void {
    console.log('Vroooom');
  }
}

const car = new Car();

car.drive();
car.honk();
