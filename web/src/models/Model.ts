import { AxiosPromise, AxiosResponse } from 'axios';

type Callback = () => void;

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

//pass in a type T that specifies the data structure
//this code is executed first before the shortened passthrough methods because they are initialized and assigned in the arguments of the constructor
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  //getter returning a reference of the on function not calling it
  //paranthesis here invoke the on method on Eventing not on right here!
  //passthrough methods
  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;

  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      //we always want to trigger a change in this class when changing data
      this.set(response.data);
    });
  }

  //any time we call save we get all the properties and save it
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        //any time we save successfully we call the save callback
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
