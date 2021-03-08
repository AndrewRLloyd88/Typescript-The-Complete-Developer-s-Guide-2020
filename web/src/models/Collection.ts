import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

//K is specifiying the data we are getting back
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  //deserialize function takes some JSON data and returns a serialized object
  // (Json: UserProps) => T(what we are storing in our models array)
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      //return an instance of a model containing each piece of data
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}
