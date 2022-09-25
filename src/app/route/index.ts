import { Router } from "express";
import { openUserRouter, secureUserRouter } from "./user";

const BASE_URL = "";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
openRouter.use(BASE_URL, openUserRouter);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, secureUserRouter);
// ************************************

export { secureRouter, openRouter };
