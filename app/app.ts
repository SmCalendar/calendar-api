import express from 'express';

import Routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/events', Routes);

export default app;