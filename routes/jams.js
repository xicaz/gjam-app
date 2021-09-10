import { Router } from "express";
import * as controllers from "../controllers/jams";

const router = Router();

router.get("/jams", controllers.getJams);

export default router;
