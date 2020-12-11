const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40];

// pepsi[0] = 40;

// pepsi[2] = 'brown';

//Tuple not useful very often

//create a type alias
type Drink = [string, boolean, number];

//consistent ordering of elements
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// pepsi[0] = 40;
