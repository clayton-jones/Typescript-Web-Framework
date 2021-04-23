import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('click', () => {
  console.log('clicky click');
});

user.trigger('change');
