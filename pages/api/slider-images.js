import nc from "next-connect"
import { v2 as cloudinary } from "cloudinary"

import fileUpload from "../../middleware/fileUpload"
import dbConnect from "../../lib/dbConnect"

import SliderImage from "../../models/slider-images"

dbConnect()

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
  let sliderImage = new SliderImage(req.body)
  try {
    // uploading event images
    const { url: image } = await cloudinary.uploader.upload(
      req.files.image[0].path,
      { folder: "/slider-images" }
    )
    sliderImage.image = image

    return res.status(200).json(await sliderImage.save())
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
