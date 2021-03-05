import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  //Method type annotation <K extends keyof T> = generic constraint
  //(key: K) limits types K can be e.g. one of the keys of T
  //lookup the value of T(UserProps) at the index of K
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

//the keys of an object can be a type as well

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'whatever',
});

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');
