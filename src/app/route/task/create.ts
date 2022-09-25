import { Response, Router, Request } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middleware";
import { createTask } from "../../services/task-service";
import { addTaskToTodoList } from "../../services/todo-list-service";
import { httpResponse } from "../../utils/httpResponse";

const router = Router();

router.post(
  "/",
  [
    body("title", "Title must be an non-empty string").isString().notEmpty(),
    body("description", "Description must be an non-empty string")
      .isString()
      .notEmpty(),
    body("todolist", "Todo List must be an non-empty string").isString().notEmpty(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, description, todolist } = req.body;

    const task = await createTask(title, description);

    addTaskToTodoList(todolist, task.id);

    httpResponse.ok(res, task, "Task Created Successfully");
  }
);

export { router as createTaskRouter };
