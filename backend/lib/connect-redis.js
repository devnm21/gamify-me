import {Client} from 'redis-om';

export const client = new Client();

export const connect = () => {
	if (!client.isOpen()) {
		console.log('Connecting to Redis', process.env.REDIS_URL);
		return client.open('redis://localhost:6379');
	}
};
 
