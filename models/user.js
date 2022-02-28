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

export default mongoose.model("users", User)
