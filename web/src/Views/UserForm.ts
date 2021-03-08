import { User } from '../models/User';
import { View } from './View';

//any time models change event is called call our render()
export class UserForm extends View {
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
}
