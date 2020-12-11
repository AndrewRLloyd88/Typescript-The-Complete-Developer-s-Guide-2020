const add = (a: number, b: number):number => {
  return a + b;
  };

//inference
// const add = (a: number, b: number) => {
// return a + b;
// };


//Always add on a return type e.g.    :number
const subtract = (a: number, b:number) => {
  a - b;
};

function divide(a:number, b:number):number {
  return a/b;
}

const multiply = function(a: number, b: number):number {
  return a*b;
}

//no return value from this function
const logger = (message: string): void => {
  console.log(message);
}

//never === we will never reach the end of this function
const throwError = (message: string): never => {
  throw new Error(message)

  //more common to have a return value
}

//this is a more common pattern
const throwError2 = (message: string): string => {
  if(!message){
  throw new Error(message)
  }

  return(message)
  //more common to have a return value
}

//this is also more common pattern - no return
const throwError3 = (message: string): void => {
  if(!message){
  throw new Error(message)
  }
}