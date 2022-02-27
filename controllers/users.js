import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.js"
import Jam from "../models/jam.js"

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11
const TOKEN_KEY = process.env.TOKEN_KEY || "gjaminwithgjrandma"

const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      name,
      email,
      password_digest,
    })

    await user.save()

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select(
      "name email password_digest"
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send("Not Authorized")
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const cart = user.cart;
    let fullCart = [];
    for (let i = 0; i < cart.length; i++) {
      const cartJam = cart[i]
      const jam = await Jam.findById(cartJam.jamId)
      if (jam) {
        fullCart.push({jam, quantity: cartJam.quantity})
      }
      else {
        cart.splice(i, 1)
        await user.save()
        //subtract 1 so that when i increments, we're not skipping the next jam
        i--;
      }
    }
    res.status(200).json(fullCart)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const item = await Jam.findById(req.body.id)
    const existingItemIndex = user.cart.findIndex((cartItem) => {
      return cartItem.jamId.toString() === item._id.toString()
    })
    if (existingItemIndex >= 0) {
      user.cart[existingItemIndex].quantity += 1
    } else {
      user.cart.push({ jamId: item._id, quantity: 1 })
    }
    await user.save()
    res.status(201).json(item)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

//url is /users/:id/cart/:item
export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const all = req.body.all
    const existingItemIndex = user.cart.findIndex((cartItem) => {
      console.log(cartItem.jamId.toString(), req.params.item)
      return cartItem.jamId.toString() === req.params.item
    })
    if (existingItemIndex >= 0) {
      const existingItem = user.cart[existingItemIndex]
      if (existingItem.quantity === 1 || all) {
        user.cart.splice(existingItemIndex, 1)
      } else {
        existingItem.quantity -= 1
      }
    } else {
      throw new Error("Product does not exist in cart!")
    }
    await user.save()
    res.status(200).send("Removed from cart")
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    user.cart = []
    await user.save()
    res.status(200).send("Cart cleared")
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
