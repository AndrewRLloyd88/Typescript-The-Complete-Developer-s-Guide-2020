let apples: number = 5;
let speed: string = "fast";
let hasName : boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']

let myNumbers :number[] = [0, 1, 2, 3]
let truths: boolean[] = [true, false, true, true]

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use annotations
// 1) Function that returns the "any" type 
// any type === typescript has no idea what type coordinates is

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number;} = JSON.parse(json);
console.log(coordinates);
