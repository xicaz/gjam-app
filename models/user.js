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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

User.virtual('subtotal').get(async function () {
  // const getJam = async (id) => {
  //   const gottenJam = await Jam.findById(id)
  //   return gottenJam
  // }
  console.log("HELLO I AM IN THE SUBTOTAL FUNCTION")
  let total = 0
  for (let i = 0; i < this.cart.length; i++) {
    const jam = await Jam.findById(this.cart[i].jamId)
    total += Number(this.cart[i].quantity) * Number(jam.price)
  }
  // for (const jamItem of this.cart) {
  //   const jam = await Jam.findById(jamItem.jamId)
  //   total += Number(jamItem.quantity) * Number(jam.price)
  // }
  // this.cart.forEach((jamItem) => {
  //   console.log("jamItem", jamItem)
  //   const jam = getJam(jamItem.jamId)
  //   console.log("jam", jam)
  //   total += Number(jamItem.quantity) * Number(jam.price)
  //   console.log("total", total)
  // })
  console.log("typeof total", typeof total)
  console.log("total at the end", total)
  return total
})

export default mongoose.model("users", User)
