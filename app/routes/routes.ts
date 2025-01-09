

import { Router } from 'express';

//contoller
import { createEvent } from '../controllers/EventController';
import { findAll } from '../controllers/PaymentController';


const router = Router();

//Event
router.post('/create-event', createEvent);


//Payment
router.get('/payments', findAll);

export default router;