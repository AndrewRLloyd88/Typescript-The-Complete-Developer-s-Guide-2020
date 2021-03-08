//an interface that specified what properties a model should have
//this has no good reason may as well use Model
// interface ModelForView {
//   on(eventName: string, callback: () => void): void;
// }
import { Model } from '../models/Model';

//implement a generic constraint
//whenever we specify view we will pass in two generic types
//K is the set of attributes that will exist inside of the model passed in
//K is essentially the UserProps
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  //default implementation of regionsMap is overridden by userEdits implementation
  regionsMap(): { [key: string]: string } {
    return {};
  }

  //eventsMap can be overwritten but is provided in this class by default
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  //property on may not exist on type T
  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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

  //structure of our regions object
  //regions: {
  //userShow: Element,
  //userForm: Element
  //}

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    //find the element where we should insert this given view
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    //clear HTML first
    this.parent.innerHTML = '';
    //execute the rest of our render
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    //.content is of type DocumentFragment - holds HTML in memory before it gets inserted to the dom
    this.parent.append(templateElement.content);
  }
}
