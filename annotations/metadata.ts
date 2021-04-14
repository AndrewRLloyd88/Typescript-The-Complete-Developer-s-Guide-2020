import 'reflect-metadata'

const plane = {
  color: 'red',
}
//metadata just lets us attach pieces of information to an object
// Reflect.defineMetadata('note', 'hi there', plane)
// Reflect.defineMetadata('height', 10, plane)

// console.log(plane)

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note, height)

//attached metadata to the color property of plane
Reflect.defineMetadata('note', 'hi there', plane, 'color')

const note = Reflect.getMetadata('note', plane, 'color')
console.log(note)
