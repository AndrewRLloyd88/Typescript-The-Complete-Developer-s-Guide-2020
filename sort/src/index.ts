class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    //bubble sorting algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //bad approach
        //If we want to add additional things to be sorted
        //We have to add them to our union
        //We would then have to have a check for our new data type or structure
        //We will have to add additional if statements
        //may lead to 50 nested if statements

        //all of this only works if collection is number[]
        //if collection is an array of numbers
        //type guards
        //instanceof constructor function e.g. instanceof Sorter, instanceof Date
        if (this.collection instanceof Array) {
          //typescript understands that collection must be an array
          //it has all the properties and features associated with array
          //union restriction is lifted
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        //only going to work if collection is string
        //if collection is a string do this logic instead
        //~~logic to compare and swap characters in a string
        //type guard in typescript does not work with typeof array
        if (typeof this.collection === 'string') {
          //restored access to properties that are available to string
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
