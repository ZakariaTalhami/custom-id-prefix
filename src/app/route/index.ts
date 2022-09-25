import { Router } from "express";
import { openTodoListRouter, secureTodoListRouter } from "./todo-list";
import { openUserRouter, secureUserRouter } from "./user";

const BASE_URL = "";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
openRouter.use(BASE_URL, openUserRouter);
openRouter.use(BASE_URL, openTodoListRouter);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, secureUserRouter);
secureRouter.use(BASE_URL, secureTodoListRouter);
// ************************************

export { secureRouter, openRouter };
