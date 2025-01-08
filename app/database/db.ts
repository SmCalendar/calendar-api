import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
    try {
        await mongoose.connect('mongodb://192.168.100.223:27017/calendar?authSource=admin', {
            user: process.env.MONGO_USERNAME,
            pass: process.env.MONGO_PASSWORD,
            dbName: 'event',
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Finaliza o processo se a conexão falhar
    }
}


export default main;
