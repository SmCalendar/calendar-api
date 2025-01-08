

import { Router } from 'express';

//contoller
import { createEvent } from '../controllers/EventController';


const router = Router();

//Event
router.post('/create-event', createEvent);

export default router;