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

// Flexible types data objects and strings
//initialize with only dates, typescript thinks array only holds dates
const importantDates: (Date | string)[] = [new Date(), '2017-01-01'];
importantDates.push('2020-10-10');
importantDates.push(new Date());
//neither a string or a date object === error
// importantDates.push(200);

//Tuples are very similar to arrays

//Array like structure where each element represents some property of a record
