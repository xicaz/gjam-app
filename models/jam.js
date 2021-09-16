import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Jam = new Schema(
  {
    name: { type: String, required: true },
    sweetness: { type: String, required: true },
    spiciness: { type: String, required: true },
    imgURL: { type: String, required: true },
    hoverImage: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: String, required: true },
    price: { type: String, required: true },
    ingredients: [{ type: String }],
    restricted: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("jams", Jam);
