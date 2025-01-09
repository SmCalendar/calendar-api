import EventModel, { IEvent } from '../../models/Event';
import { EventRepository } from '../../repositories/EventRespository';

jest.mock('../../models/Event');

describe('EventRepository', () => {

    let eventRepository: EventRepository;
    let mockCreate: jest.Mock;

    beforeEach(() => {
        mockCreate = jest.fn();

        (EventModel.create as jest.Mock) = mockCreate;

        eventRepository = new EventRepository();
    });

    it('should create a new event', async () => {
        const mockEvent: IEvent = {
            title: 'Test Event',
            subtitle: 'Test Subtitle',
            dateStart: new Date(),
            dateEnd: new Date(),
            _id: '1', // Incluindo _id para que o objeto se assemelhe a um documento do MongoDB
        } as IEvent;

        mockCreate.mockResolvedValue(mockEvent);

        const result = await eventRepository.create(mockEvent);
        expect(mockCreate).toHaveBeenCalledWith(mockEvent);
        expect(result).toEqual(mockEvent);
    });


});