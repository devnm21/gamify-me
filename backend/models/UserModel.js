import {Entity, Schema} from 'redis-om';
import {client} from '../lib/connect-redis';

console.log('Connecting to Redis', process.env.REDIS_URL);
class User extends Entity {}
const UserSchema = new Schema(User,{
	id: {
		type: 'string',
	},
	firstName: {
		type: 'string',
	},
	lastName: {
		type: 'string',
	},
	email: {
		type: 'string',
	},
	projects: {
		type: 'string[]'
	}
}, {
	dataStructure: 'JSON',
});


const getUserRepository = () => {
	return client.fetchRepository(UserSchema);
};
export default getUserRepository;
