import { Router } from "express";
import { createTodoListRouter } from "./create";

const BASE_URL = "/todo-list";
const openRouter = Router();
const secureRouter = Router();

// *********** OPEN ROUTES ************
// openRouter.use(BASE_URL);
// ************************************

// ********** SECURED ROUTES **********
secureRouter.use(BASE_URL, createTodoListRouter);
// ************************************

export { secureRouter as secureTodoListRouter, openRouter as openTodoListRouter };
