import SliderImage from "../../models/slider-images"

import dbConnect from "../dbConnect"

dbConnect()

export function getAllSliderImages() {
  return SliderImage.find()
}
