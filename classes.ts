class Vehicle {
  protected honk(): void {
    console.log('Honk Honk');
  }
}
//vehicle is the Super or parent class
const vehicle = new Vehicle();
vehicle.honk();

//overridden a method on the child class
class Car extends Vehicle {
  private drive(): void {
    console.log('Vroooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();

car.startDrivingProcess();
car.honk();

//modifiers public private and protected
//restict access to different functions or variables
//by default Public modifier is added to properties
//Public - method can be called anywhere anytime
//Private - can only be called by other methds in this class
//Private - we are not adding in any layer of app security just stopping other developers calling methods
//Protected means the method can only be called by subclasses of the parent or super class.
