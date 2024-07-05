import { Request, Response } from "express";
import * as likesService from "../services/likes.service";

export const getLikes = async (req: Request, res: Response) => {
    const likesCount = await likesService.getLikes()
    res.status(200).send(String(likesCount))
}

export const updateLikes = async (req: Request, res: Response) => {
    const status = await likesService.updateLikes()
    res.status(200).send(status)
}