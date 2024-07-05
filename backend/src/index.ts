import express, { Request, Response } from "express"
import cors from 'cors'
import * as mongoose from "mongoose"

import likesRouter from "./routes/likes.route"
import { PORT } from "./consts"
import { connectToDB } from "./db"

const app = express()

app.use(cors())
app.use("/likes", likesRouter)

app.get("/", (req: Request, res: Response) => { 
  res.status(200).send("Server is running")
})

const main = async () => {
  try {
    await connectToDB()

    app.listen(PORT, async () => console.log(`Server is starting at PORT=${PORT}`))
  } catch (err: any) {
    console.log(err.message)
  }
}

main().catch(e => console.log(e))

process.on("SIGINT", async () => {
  await mongoose.disconnect()
  console.log("Server is stopping.")
  process.exit();
})