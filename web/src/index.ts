import { User } from './models/User';

const user = new User({ name: 'newestname', age: 34 });

//is trying to access user.data.name before binding this with => functions

console.log(user.get('name'));

user.on('change', () => {
  console.log('changed');
});

user.trigger('change');

//'this' rule of thumb in JS
//'this' is going to be equal to whatever is to the left of our function call
