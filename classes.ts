class Vehicle {
  //modifiers can be used on properties or fields too
  //this modifier is called automatically
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Honk Honk');
  }
}
//protected can only be called in an extended class
//vehicle is the Super or parent class
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

//overridden a method on the child class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'silver');

car.startDrivingProcess();

//modifiers public private and protected
//restict access to different functions or variables
//by default Public modifier is added to properties
//Public - method can be called anywhere anytime
//Private - can only be called by other methds in this class
//Private - we are not adding in any layer of app security just stopping other developers calling methods
//Protected means the method can only be called by subclasses of the parent or super class.
