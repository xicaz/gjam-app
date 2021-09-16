import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

router.post("/signup", controllers.signUp)
router.post("/signin", controllers.signIn)
router.get("/verify", controllers.verify)

router.get("/users/:id/cart", controllers.getCart)
router.post("/users/:id/cart", controllers.addToCart)

export default router