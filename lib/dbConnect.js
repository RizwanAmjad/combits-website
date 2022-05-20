import mongoose from "mongoose"

export default async function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log("Connected")
  } else {
    mongoose.connect(
      process.env.DB_URI || "mongodb://localhost/combits",
      () => {
        console.log("Connecting to MongoDB... Success")
      }
    )
  }
}
