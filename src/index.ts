import { User } from './models/User';

const user = new User({ name: 'me', age: 28 });

console.log(user.get('name'));
