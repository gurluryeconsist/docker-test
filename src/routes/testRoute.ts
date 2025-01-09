import { Router } from "express";
import { testController } from "../controllers/generalController";

const router = Router();

router.get("/get-test", testController);

export default router;
