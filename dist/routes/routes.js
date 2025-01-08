"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//contoller
const EventController_1 = require("../controllers/EventController");
const router = (0, express_1.Router)();
//Event
router.post('/create-event', EventController_1.createEvent);
exports.default = router;
