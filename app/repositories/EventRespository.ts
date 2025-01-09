

import EventModel, { IEvent } from '../models/Event';


export class EventRepository {
    async create(event: IEvent): Promise<IEvent> {
        return await EventModel.create(event);
    }

    async findAll(): Promise<IEvent[]> {
        return await EventModel.find();
    }

    async findByTitle(title: string): Promise<IEvent[]> {
        return await EventModel.find({ title: title });
    }

    async existsById(id: number): Promise<boolean> {
        return await EventModel.findById(id) !== null;
    }
}