import { User } from './models/User';
import { UserForm } from './Views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 24 });
const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
