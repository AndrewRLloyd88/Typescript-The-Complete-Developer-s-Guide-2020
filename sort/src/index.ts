import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
//numbersCollection satisfies Sortable in Sorter.ts
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
