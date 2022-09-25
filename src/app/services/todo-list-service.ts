import { ITodoListDoc, TodoLists } from "../model/todo-list";

export const createTodoList = async (
  name: string,
  user: string,
): Promise<ITodoListDoc> => {
    const todoList = await TodoLists.create({
        name,
        user
    });

    return todoList;
};
