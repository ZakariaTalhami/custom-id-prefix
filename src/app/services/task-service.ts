import { ITaskDoc, Tasks } from "../model/task";

export const createTask = async (
  title: string,
  description: string,
): Promise<ITaskDoc> => {
    const tasks = await Tasks.create({
      title,
      description
    });

    return tasks;
};
