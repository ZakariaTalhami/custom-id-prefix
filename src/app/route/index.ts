import { Router } from "express";
import { openQueryRouter, secureQueryRouter } from "./query";
import { openTaskRouter, secureTaskRouter } from "./task";
import { openTodoListRouter, secureTodoListRouter } from "./todo-list";
import { openUserRouter, secureUserRouter } from "./user";

const BASE_URL = "";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
openRouter.use(BASE_URL, openUserRouter);
openRouter.use(BASE_URL, openTodoListRouter);
openRouter.use(BASE_URL, openTaskRouter);
openRouter.use(BASE_URL, openQueryRouter);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, secureUserRouter);
secureRouter.use(BASE_URL, secureTodoListRouter);
secureRouter.use(BASE_URL, secureTaskRouter);
secureRouter.use(BASE_URL, secureQueryRouter);
// ************************************

export { secureRouter, openRouter };
