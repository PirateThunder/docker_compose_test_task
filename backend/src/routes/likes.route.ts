import { Router } from "express";
import * as likesController from "../controllers/likes.controller";

const likesRouter = Router()

likesRouter.get("/", likesController.getLikes)
likesRouter.patch("/", likesController.updateLikes)

export default likesRouter
