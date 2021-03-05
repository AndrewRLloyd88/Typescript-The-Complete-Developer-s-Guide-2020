import { User } from './models/User';

const user = new User({ name: 'newestname', age: 34 });

user.save();
