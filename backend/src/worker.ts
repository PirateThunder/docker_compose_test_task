//import * as path from 'path'
import { Job, Worker } from 'bullmq';
import {
	REDIS_HOST,
	REDIS_PORT,
} from './consts';
import jobProcessor from './job-processor'

let worker: Worker

// const processorPath = path.join(__dirname, 'job-processor.ts');
// console.log(processorPath)

export function setUpWorker(): void {
	console.log('worker.ts redis connect')
	worker = new Worker('my-queue', jobProcessor, {
		connection: {
			host: REDIS_HOST,
			port: Number(REDIS_PORT),
		},
		autorun: true,
	});

	worker.on('completed', (job: Job, returnvalue: 'DONE') => {
		console.debug(`Completed job with id ${job.id}`, returnvalue)
	});

	worker.on('active', (job: Job<unknown>) => {
		console.debug(`Completed job with id ${job.id}`)
	});
	worker.on('error', (failedReason: Error) => {
		console.error(`Job encountered an error`, failedReason)
	});	
}