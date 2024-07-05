import { Schema, model } from "mongoose"

interface ILikes {
    count: number
}

const likesSchema = new Schema<ILikes>({
    count: { type: Number, required: true }
})

const Likes = model<ILikes>('Likes', likesSchema)

export default Likes