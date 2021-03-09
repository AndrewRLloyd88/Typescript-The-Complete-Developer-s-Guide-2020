import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';

import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    //need a standalone view to take in the model and render it
    new UserShow(itemParent, model).render();
  }
}
