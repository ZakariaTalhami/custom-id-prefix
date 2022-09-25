import { HttpErrors } from "../error";
import { ITodoListDoc, TodoLists } from "../model/todo-list";

export const createTodoList = async (
  name: string,
  user: string
): Promise<ITodoListDoc> => {
  const todoList = await TodoLists.create({
    name,
    user,
  });

  return todoList;
};

export const findTodoList = async (
  todoListId: string
): Promise<ITodoListDoc | null> => {
  return TodoLists.findOne({
    _id: todoListId,
  });
};

export const findTodoListOrThrow = async (
  todoListId: string
): Promise<ITodoListDoc> => {
  const todoList = await findTodoList(todoListId);

  if (!todoList) {
    throw new HttpErrors.HttpNotFoundError("Todolist not found");
  }

  return todoList;
};

export const addTaskToTodoList = async (todoListId: string, taskId: string) => {
  await TodoLists.findOneAndUpdate(
    {
      _id: todoListId,
    },
    {
      $addToSet: {
        tasks: [taskId],
      },
    }
  );
};
