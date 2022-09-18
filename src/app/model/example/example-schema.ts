import { Document, Model, Schema } from "mongoose";
import { IExample } from "../../inferfaces";

interface IExampleDoc extends Document, IExample {
  createdAt: Date;
}

interface IExampleModel extends Model<IExampleDoc> {}

const exampleSchema = new Schema<IExampleDoc>(
  {

  },
  {
    timestamps: true,
  }
);

export { IExampleDoc, IExampleModel, exampleSchema };
