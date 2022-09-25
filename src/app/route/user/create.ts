import { Response, Router, Request } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middleware";
import { createUser } from "../../services/user-service";
import { httpResponse } from "../../utils/httpResponse";

const router = Router();

router.post(
  "/",
  [
    body("name", "Name must be an non-empty string").isString().notEmpty(),
    body("email", "Email must be an non-empty string").isString().notEmpty(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, name } = req.body;

    const user = await createUser(name, email);

    httpResponse.ok(res, user, "User Created Successfully");
  }
);

export { router as createUserRouter };
