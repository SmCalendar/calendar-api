"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const EventService_1 = require("../services/EventService");
const service = new EventService_1.EventService();
const createEvent = (req, res) => {
    service.createEvent(req.body).then(() => {
        res.status(201).send('Event created successfully');
    }).catch((error) => {
        res.status(400).send(error.message);
    });
};
exports.createEvent = createEvent;
