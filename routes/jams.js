import { Router } from "express"
import * as controllers from "../controllers/jams.js"
import restrict from "../helpers/restrict.js"

const router = Router()

router.get("/jams", controllers.getJams)
router.get("/jams/:id", controllers.getJam)
router.post("/jams", restrict, controllers.createJam)
router.put("/jams/:id", restrict, controllers.updateJam)
router.delete("/jams/:id", restrict, controllers.deleteJam)
router.get("/featuredJams", controllers.getFeaturedJams)

export default router
