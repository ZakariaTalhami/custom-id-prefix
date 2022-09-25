import { IUserDoc, Users } from "../model/user";

export const createUser = async (
  name: string,
  email: string
): Promise<IUserDoc> => {
    const user = await Users.create({
        email,
        name
    });

    return user;
};
