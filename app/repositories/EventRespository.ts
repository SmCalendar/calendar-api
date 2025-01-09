

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

//event loop é o coração do nodejs 
//ele é resposavel por gerenciar as tarefas, especialmente às assicronas

//o event loop delega execuções para thread pool e worker thread