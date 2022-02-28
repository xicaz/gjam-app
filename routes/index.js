import { Router } from "express";
import jamsRoutes from "/Users/jexica/Sync/general_assembly/Chickadee/unit_3/week_9/Monday/Project_3/gjam-app/routes/jams.js";
import usersRoutes from "/Users/jexica/Sync/general_assembly/Chickadee/unit_3/week_9/Monday/Project_3/gjam-app/routes/users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is an API Root"));

router.use("/", usersRoutes);
router.use("/", jamsRoutes);

export default router;
