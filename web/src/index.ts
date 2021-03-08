import { User } from './models/User';
import { UserForm } from './Views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 24 });
const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root Element not found');
}
