import { Model, Document } from "mongoose";
import {
  DB_TASK_ID_PREFIX,
  DB_TODO_LIST_ID_PREFIX,
  DB_USER_ID_PREFIX,
} from "../constants";
import { Tasks } from "../model/task";
import { TodoLists } from "../model/todo-list";
import { Users } from "../model/user";

const PREFIX_TO_MODEL_MAP: Record<string, Model<any>> = {
  [DB_USER_ID_PREFIX]: Users,
  [DB_TODO_LIST_ID_PREFIX]: TodoLists,
  [DB_TASK_ID_PREFIX]: Tasks,
};

export const queryEntityById = async (id: string) => {
  const [prefix] = id.split("_");

  const model = PREFIX_TO_MODEL_MAP[prefix];

  const entity = await model.findById(id);

  return {
    entity,
    modelName: model.modelName,
    collectionName: model.collection.name
  };
};
