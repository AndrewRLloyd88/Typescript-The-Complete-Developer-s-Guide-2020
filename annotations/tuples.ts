const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40];

// pepsi[0] = 40;

// pepsi[2] = 'brown';

//Tuple not useful very often
//CSV file - single row

//create a type alias
type Drink = [string, boolean, number];

//consistent ordering of elements
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// pepsi[0] = 40;

//we can't understand what the numbers are
const carSpecs: [number, number] = [400, 3354];

//its clearer at one glance to understand what these values mean in this model
const carStats: { horsepower: number; weight: number } = {
  horsepower: 400,
  weight: 3354,
};
