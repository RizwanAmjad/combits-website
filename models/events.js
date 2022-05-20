import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
  title: String,
  description: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
})

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema)

export default Event
