import { EventService } from '../../services/EventService';
import { EventRepository } from '../../repositories/EventRespository';
import { IEvent } from '../../models/Event';

jest.mock('../../repositories/EventRespository');

describe('EventService', () => {
    let eventService: EventService;
    let eventRepositoryMock: jest.Mocked<EventRepository>;

    beforeEach(() => {
        eventRepositoryMock = new EventRepository() as jest.Mocked<EventRepository>;
        eventService = new EventService();
        (eventService as any).eventRepository = eventRepositoryMock;
    });

    it('should create an event', async () => {
        const event: IEvent = { title: 'Test Event', subtitle: 'test', dateStart: new Date(), dateEnd: new Date() } as IEvent;
        eventRepositoryMock.create.mockResolvedValue(event);

        const result = await eventService.createEvent(event);

        expect(eventRepositoryMock.create).toHaveBeenCalledWith(event);
        expect(result).toEqual(event);
    });
});