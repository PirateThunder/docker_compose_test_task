import Likes from "../models/likes.model"
import { addJobToQueue } from "../queue"

export const getLikes = async () => {
    const likes = await Likes.findOne()
    return likes?.count
}

export const updateLikes = async () => {
    // const likes = await Likes.findOne()
    // likes!.count += 1
    // await likes?.save()
    // return { jobId: 42 }

    const job = await addJobToQueue(null);
    return { jobId: job.id }
}