import { Router } from "express";
import { createUserRouter } from "./create";

const BASE_URL = "/user";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
// openRouter.use(BASE_URL);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, createUserRouter);
// ************************************

export { secureRouter as secureUserRouter, openRouter as openUserRouter };
