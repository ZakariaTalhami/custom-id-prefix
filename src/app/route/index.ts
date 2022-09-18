import { Router } from "express";
import { openExampleRouter, secureExampleRouter } from "./example";

const BASE_URL = "";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
openRouter.use(BASE_URL, openExampleRouter);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, secureExampleRouter);
// ************************************

export { secureRouter, openRouter };
