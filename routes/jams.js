import { Router } from "express"
import * as controllers from "../controllers/jams.js"

const router = Router()

router.get("/jams", controllers.getJams)

export default router
