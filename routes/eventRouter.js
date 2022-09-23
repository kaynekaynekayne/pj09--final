import express from 'express';
import { mainEvents, search, detail, place} from '../controllers/eventController.js';

const eventRouter=express.Router();

eventRouter.get("/events", mainEvents);
eventRouter.get("/search", search);
eventRouter.get("/detail", detail);
eventRouter.get("/place", place);

export default eventRouter;