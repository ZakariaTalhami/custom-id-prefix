import mongoose from "mongoose";
import { DB_EXAMPLE_COLLECTION_NAME, DB_EXAMPLE_MODEL_NAME } from "../../constants";
import { IExampleDoc, IExampleModel, exampleSchema } from "./example-schema";

const Examples: IExampleModel = mongoose.model<IExampleDoc, IExampleModel>(
  DB_EXAMPLE_MODEL_NAME,
  exampleSchema,
  DB_EXAMPLE_COLLECTION_NAME
);

export { IExampleDoc, Examples };
