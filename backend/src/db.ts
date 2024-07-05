import mongoose from "mongoose"
import Likes from "./models/likes.model"
import { MONGO_URL } from "./consts"

export const connectToDB = async () => {
    await mongoose.connect(MONGO_URL)
    console.log(`Connecting to MongoDB ${MONGO_URL}`)

    const count = await Likes.countDocuments()
    if (count === 0) {
      const likes = new Likes({
        count: 0
      })
      await likes.save()
    }
}