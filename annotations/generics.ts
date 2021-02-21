class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//T is just an argument for TypeOfData
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
//type inference aorund generics
const arr = new ArrayOfAnything(['a', 'b', 'c']);

//example of generics with functions

function printStrings(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function printNumbers(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

//we imagine the T is an extra argument
//an array of whatever T is
function printAnything<T>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

//<string[]> would suggest you are adding a 2d array
//typescript can now figure out what T is
//its helpful to add the type annotations in to catch errors
printAnything<string>(['a', 'b', 'c']);

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

//add on a constraint to type T to tell typescript a print method will be available
//T extends is the constraint - It will have a method that returns printable
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
