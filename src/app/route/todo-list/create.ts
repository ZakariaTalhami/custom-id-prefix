import { Response, Router, Request } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middleware";
import { createTodoList } from "../../services/todo-list-service";
import { httpResponse } from "../../utils/httpResponse";

const router = Router();

router.post(
  "/",
  [
    body("name", "Name must be an non-empty string").isString().notEmpty(),
    body("user", "User must be an non-empty string").isString().notEmpty(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, user } = req.body;

    const todoList = await createTodoList(name, user);

    httpResponse.ok(res, todoList, "Todo List Created Successfully");
  }
);

export { router as createTodoListRouter };
