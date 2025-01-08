

import EventModel, { IEvent } from '../models/Event';


export class EventRepository {
    async create(event: IEvent): Promise<IEvent> {
        return await EventModel.create(event);
    }

    async existsById(id: number): Promise<boolean> {
        return await EventModel.findById(id) !== null;
    }
}