import { Job, Queue } from 'bullmq'
import { REDIS_HOST, REDIS_PORT } from './consts'
import { setUpWorker } from './worker'

console.log('queue.ts redis connect')
export const myQueue = new Queue('my-queue', {
	connection: {
		host: REDIS_HOST,
		port: Number(REDIS_PORT),
	},
})

setUpWorker()

const DEFAULT_REMOVE_CONFIG = {
	removeOnComplete: {
		age: 3600,
	},
	removeOnFail: {
		age: 24 * 3600,
	},
}

export async function addJobToQueue<T>(data: T): Promise<Job<T>> {
	return myQueue.add('job', data, DEFAULT_REMOVE_CONFIG)
}