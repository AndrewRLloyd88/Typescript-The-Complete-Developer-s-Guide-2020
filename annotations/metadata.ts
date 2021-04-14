import 'reflect-metadata'

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('HELLO THERE')
  fly(): void {
    console.log('vrrrrrrr')
  }
}

//ties metadata information to the method fly via decorator factory
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

//apply decorator to classes prototype
//typeof Plane is a reference to the classes constructor function
function printMetadata(target: typeof Plane) {
  //iterate through keys in prototype e.g. fly
  for (let key in target.prototype) {
    //inside fly() we will try to get to secret
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret)

// const plane = {
//   color: 'red',
// }
//metadata just lets us attach pieces of information to an object
// Reflect.defineMetadata('note', 'hi there', plane)
// Reflect.defineMetadata('height', 10, plane)

// console.log(plane)

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note, height)

//attached metadata to the color property of plane
// Reflect.defineMetadata('note', 'hi there', plane, 'color')

// const note = Reflect.getMetadata('note', plane, 'color')
// console.log(note)
