import mongoose from "mongoose";
import { DB_TODO_LIST_COLLECTION_NAME, DB_TODO_LIST_MODEL_NAME } from "../../constants";
import { ITodoListDoc, ITodoListModel, todolistSchema } from "./todo-list-schema";

const TodoLists: ITodoListModel = mongoose.model<ITodoListDoc, ITodoListModel>(
  DB_TODO_LIST_MODEL_NAME,
  todolistSchema,
  DB_TODO_LIST_COLLECTION_NAME
);                            

export { ITodoListDoc, TodoLists };
