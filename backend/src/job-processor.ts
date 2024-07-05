import { Job } from 'bullmq';
import Likes from './models/likes.model';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export default async function jobProcessor(job: Job): Promise<'DONE'> {
	await job.log(`Started processing job with id ${job.id}`)
	console.log(`Started processing job with id ${job.id}`, job.data)

	// CPU bound
    await sleep(1000) // synthetic delay
    const likes = await Likes.findOne()
    likes!.count += 1
    await likes?.save()

    await job.log(`End processing job with id ${job.id}`);
	console.log(`End processing job with id ${job.id}`, job.data);
    
    await job.updateProgress(100)
    return 'DONE'
};