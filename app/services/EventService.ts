import { IEvent } from "../models/Event";
import { EventRepository } from "../repositories/EventRespository";

export class EventService {

    private eventRepository: EventRepository;

    constructor() {
        this.eventRepository = new EventRepository();
    }

    async createEvent(event: IEvent): Promise<IEvent> {
        console.log("EventService.createEvent - event: ", event);
        return await this.eventRepository.create(event);
    }

}