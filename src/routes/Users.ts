import { Request, Response, Router } from "express";
import { User } from "../entity/User";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  const users = await User.find();
  response.status(200).json(users);
});

export default router;
