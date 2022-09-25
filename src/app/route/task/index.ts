import { Router } from "express";
import { createTaskRouter } from "./create";

const BASE_URL = "/task";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
// openRouter.use(BASE_URL);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, createTaskRouter);
// ************************************

export { secureRouter as secureTaskRouter, openRouter as openTaskRouter };
