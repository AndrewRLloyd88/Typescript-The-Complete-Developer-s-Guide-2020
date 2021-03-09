import { User, UserProps } from './models/User';
import { UserEdit } from './Views/UserEdit';
import { UserList } from './Views/UserList';
import { Collection } from './models/Collection';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// const user = User.buildUser({ name: 'NAME', age: 24 });
// const root = document.getElementById('root');
// if (root) {
//   const userEdit = new UserEdit(root, user);

//   console.log(userEdit);
//   userEdit.render();
// } else {
//   throw new Error('Root Element not found');
// }
