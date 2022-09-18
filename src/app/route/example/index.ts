import { Router } from "express";
import { createExampleRouter } from "./create";

const BASE_URL = "/example";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
// openRouter.use(BASE_URL);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, createExampleRouter);
// ************************************

export { secureRouter as secureExampleRouter, openRouter as openExampleRouter };
