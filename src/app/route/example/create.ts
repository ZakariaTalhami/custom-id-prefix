import { Response, Router, Request } from "express";
import { body } from "express-validator";
import { httpResponse } from "../../utils/httpResponse";

const router = Router();

router.post(
  "/",
  [
    body("title", "Title must be an non-empty string").isString().notEmpty(),
    body("body", "Body must be an non-empty string").isString().notEmpty()
  ],
  async (req: Request, res: Response) => {

    httpResponse.ok(res, {}, "Created Successfully");
  }
);

export { router as createExampleRouter };
