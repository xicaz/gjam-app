import { Router } from "express";
import jamsRoutes from "./jams.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is an API Root"));

router.use("/", usersRoutes);
router.use("/", jamsRoutes);

export default router;
