import { IEvent } from "../models/Event";
import { EventService } from "../services/EventService";
import { Request, Response } from 'express'

const service = new EventService();

export const createEvent = (req: Request, res: Response) => {

    service.createEvent(req.body as IEvent).then(() => {
            res.status(201).send('Event created successfully');
        }).catch((error) => {
            res.status(400).send(error.message);
        });
}