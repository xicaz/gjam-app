import mongoose from "mongoose"
import Jam from "./jam.js"
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    cart: [
      {
        jamId: { type: Schema.Types.ObjectId, refs: "jams" },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
)

User.virtual("subtotal").get(function () {
  let total = 0
  this.cart.forEach((jamItem) => {
    const jam = Jam.getById(jamItem.jamId)
    total += Number(jamItem.quantity) * Number(jam.price)
  })
  return total
})

export default mongoose.model("users", User)
