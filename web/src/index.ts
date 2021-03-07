import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 35 });

//is trying to access user.data.name before binding this with => functions

user.on('save', () => {
  console.log(user);
});

user.save();

//'this' rule of thumb in JS
//'this' is going to be equal to whatever is to the left of our function call
