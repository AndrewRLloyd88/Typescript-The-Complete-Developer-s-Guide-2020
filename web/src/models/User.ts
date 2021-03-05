interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    //handlers is guaranteed to be an array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}

//assign some properties to user upon creation
