import { Response, Router, Request } from "express";
import { param } from "express-validator";
import { validateRequest } from "../../middleware";
import { queryEntityById } from "../../services/query-service";
import { httpResponse } from "../../utils/httpResponse";

const router = Router();

router.get(
  "/id/:id",
  [
    param("id", "ID must be an non-empty string").isString().notEmpty(),
  ],
  validateRequest,
  async (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params;

    const entity = await queryEntityById(id);

    httpResponse.ok(res, entity, "Entity queried Successfully");
  }
);

export { router as createQueryIdRouter };
