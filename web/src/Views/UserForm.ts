export class UserForm {
  constructor(public parent: Element) {}

  //relate different events to watch for to what events we want to run
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('Hi There');
  }

  template(): string {
    return `
    <div>
    <h1>User Form</h1>
    <input></input>
    <button>Click me</button>
    </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
