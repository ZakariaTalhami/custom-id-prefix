import { Document, Model, Schema, Types } from "mongoose";
import { DB_USER_ID_PREFIX } from "../../constants";
import { IUser } from "../../inferfaces";

interface IUserDoc extends Document, IUser {
  createdAt: Date;
}

interface IUserModel extends Model<IUserDoc> {}

const userSchema = new Schema<IUserDoc>(
  {
    _id: {
      type: String,
      default: () => {
        return `${DB_USER_ID_PREFIX}_${new Types.ObjectId()}`
      }
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

export { IUserDoc, IUserModel, userSchema };
