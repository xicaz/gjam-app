import { Router } from "express"
import * as controllers from "../controllers/users.js"

const router = Router()

router.post("/signup", controllers.signUp)
router.post("/signin", controllers.signIn)
router.get("/verify", controllers.verify)

router.get("/users/:id", controllers.getUser)
router.get("/users/:id/cart", controllers.getCart)
router.post("/users/:id/cart", controllers.addToCart)
router.delete("/users/:id/cart", controllers.clearCart)
//send body of {all: true} if deleting all
router.delete("/users/:id/cart/:item", controllers.removeFromCart)

export default router
