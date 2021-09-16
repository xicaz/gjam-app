import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import Jam from '../models/jam.js'

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11
const TOKEN_KEY = process.env.TOKEN_KEY || 'gjaminwithgjrandma'

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
      'name email password_digest'
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
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
}

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const userCart = await Jam.find({
      '_id': { $in: user.cart }
    })
    res.json(userCart)
  } catch (error) {
       console.error(error);
       res.status(500).json({ error: error.message })
  };
}

export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const item = await Jam.findById(req.body.id)
    user.cart.push(item)
    await user.save()
    res.status(201).json(item)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const item = await Jam.findById(req.params.item)
    user.cart.splice(user.cart.indexOf(item._id), 1)
    await user.save()
    res.status(200).send("Removed from cart")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
}