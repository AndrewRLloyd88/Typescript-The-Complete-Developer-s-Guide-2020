//handles all the different events tied to a user

type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  //need to set up on and trigger as bound functions because they use 'this'
  //should be using arrow functions 100% of the time!

  on = (eventName: string, callback: Callback): void => {
    //handlers is guaranteed to be an array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]; //can be an array or undefined

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
