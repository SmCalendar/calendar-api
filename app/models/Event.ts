
import mongoose, { Schema, Document } from 'mongoose';


export interface IEvent extends Document {
    title: string,
    subtitle: string | undefined,
    dateStart: Date,
    dateEnd: Date
}

export const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    dateStart: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    }
});


export default mongoose.model<IEvent>('Event', EventSchema);


