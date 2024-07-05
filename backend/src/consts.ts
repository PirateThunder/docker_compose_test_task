import dotenv from "dotenv"

dotenv.config()

export const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test_task_db"

export const REDIS_HOST = process.env.REDIS_HOST || "localhost"
export const REDIS_PORT = process.env.REDIS_PORT || 6379

export const PORT = process.env.PORT || 8000