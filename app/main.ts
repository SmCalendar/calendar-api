
import DatabaseConnectionMongodb from './database/db';
import app from './app'
import dotenv from 'dotenv'
 
dotenv.config();

const startServer = async() => {
    await DatabaseConnectionMongodb();
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running on port 3000');
    });
}

startServer();