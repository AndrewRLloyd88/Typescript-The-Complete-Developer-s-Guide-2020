// const carMakers: string[] = [];

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//2d arrays
// const carsByMake: string[][]
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(2);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
