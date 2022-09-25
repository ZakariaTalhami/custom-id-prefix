import { Document, Model, Schema, Types } from "mongoose";
import { DB_TASK_ID_PREFIX } from "../../constants";
import { ITask } from "../../inferfaces";

interface ITaskDoc extends Document, ITask {
  createdAt: Date;
}

interface ITaskModel extends Model<ITaskDoc> {}

const taskSchema = new Schema<ITaskDoc>(
  {
    _id: {
      type: String,
      default: () => {
        return `${DB_TASK_ID_PREFIX}_${new Types.ObjectId()}`
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      defailt: false
    }
  },
  {
    timestamps: true,
  }
);

export { ITaskDoc, ITaskModel, taskSchema };
