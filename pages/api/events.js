import nc from "next-connect"

import { v2 as cloudinary } from "cloudinary"

import fileUpload from "../../middleware/fileUpload"
import dbConnect from "../../lib/dbConnect"
import Event from "../../models/events"

dbConnect()

const { CLOUDINARY_URL } = process.env

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end("Something broke!")
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found")
  },
})

handler.use(fileUpload)

handler.post(async (req, res) => {
  let event = new Event(req.body)
  try {
    // uploading content markdown file
    const { url: content } = await cloudinary.uploader.upload(
      req.files.content[0].path,
      {
        folder: "/event-content",
        resource_type: "raw",
      }
    )
    event.content = content

    // uploading event images
    const { url: image } = await cloudinary.uploader.upload(
      req.files.images[0].path,
      { folder: "/event-images" }
    )
    event.image = image

    return res.status(200).json(await event.save())
  } catch (err) {
    return res.status(400).json(err)
  }
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
