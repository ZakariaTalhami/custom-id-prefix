import mongoose from "mongoose";
import { DB_TASK_COLLECTION_NAME, DB_TASK_MODEL_NAME } from "../../constants";
import { ITaskDoc, ITaskModel, taskSchema } from "./task-schema";

const Tasks: ITaskModel = mongoose.model<ITaskDoc, ITaskModel>(
  DB_TASK_MODEL_NAME,
  taskSchema,
  DB_TASK_COLLECTION_NAME
);                            

export { ITaskDoc, Tasks };
