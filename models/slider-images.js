import mongoose from "mongoose"

const SliderImageSchema = new mongoose.Schema({
  image: { type: String, required: true },
})

const SliderImage =
  mongoose.models.SliderImage ||
  mongoose.model("SliderImage", SliderImageSchema)

export default SliderImage
