import { Router } from "express";
import { createQueryIdRouter } from "./id";

const BASE_URL = "/query";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
// openRouter.use(BASE_URL);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, createQueryIdRouter);
// ************************************

export { secureRouter as secureQueryRouter, openRouter as openQueryRouter };
