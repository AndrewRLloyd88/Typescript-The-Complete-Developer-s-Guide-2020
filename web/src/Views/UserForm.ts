import { User, UserProps } from '../models/User';
import { View } from './View';

//any time models change event is called call our render()
export class UserForm extends View<User, UserProps> {
  //relate different events to watch for to what events we want to run
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.onUpdateNameClick,
      'click:.save-model': this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get('name')}"></input>
    <button class="update-name">Update Name</button>
    <button class="set-age">Set Random Age</button>
    <button class="save-model">Save User</button>
    </div>
    `;
  }
}
