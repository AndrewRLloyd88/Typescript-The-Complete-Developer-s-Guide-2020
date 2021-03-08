import { User } from './models/User';
import { UserEdit } from './Views/UserEdit';

const user = User.buildUser({ name: 'NAME', age: 24 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);

  console.log(userEdit);
  userEdit.render();
} else {
  throw new Error('Root Element not found');
}
