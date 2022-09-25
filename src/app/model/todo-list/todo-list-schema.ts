import { Document, Model, Schema, Types } from "mongoose";
import { DB_TODO_LIST_ID_PREFIX } from "../../constants";
import { ITodoList } from "../../inferfaces";

interface ITodoListDoc extends Document, ITodoList {
  createdAt: Date;
}

interface ITodoListModel extends Model<ITodoListDoc> {}

const todolistSchema = new Schema<ITodoListDoc>(
  {
    _id: {
      type: String,
      default: () => {
        return `${DB_TODO_LIST_ID_PREFIX}_${new Types.ObjectId()}`
      }
    },
    name: {
      type: String,
      require: true
    },
    user: {
      type: String,
      required: true
    },
    tasks: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true,
  }
);

export { ITodoListDoc, ITodoListModel, todolistSchema };
