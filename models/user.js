import mongoose from "mongoose"
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    cart: [{ type: Schema.Types.ObjectId, ref: 'jams' }]
  },
  { timestamps: true }
)

export default mongoose.model("users", User)
