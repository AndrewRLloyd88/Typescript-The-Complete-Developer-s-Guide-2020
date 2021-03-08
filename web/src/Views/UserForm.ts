import { User } from '../models/User';

//any time models change event is called call our render()
export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  //relate different events to watch for to what events we want to run
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.onUpdateNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onUpdateNameClick = (): void => {
    const input = this.parent.querySelector('input');
    //adding a type guard to adhere to strict null checks
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
    <div>
    <h1>User Form</h1>
    <div>User name: ${this.model.get('name')}</div>
    <div>User age: ${this.model.get('age')}</div>
    <input></input>
    <button class="update-name">Update Name</button>
    <button class="set-age">Set Random Age</button>
    </div>
    `;
  }

  //helper method
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      //destructure the key and property into two seperate pieces
      //e.g. click , button
      const [eventName, selector] = eventKey.split(':');
      //find all the different elements that match that selector
      fragment.querySelectorAll(selector).forEach((element) => {
        //for every element we match we will attach whatever event handler we reference e.g. onButtonClick
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    //clear HTML first
    this.parent.innerHTML = '';
    //execute the rest of our render
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    //.content is of type DocumentFragment - holds HTML in memory before it gets inserted to the dom
    this.parent.append(templateElement.content);
  }
}
