import events from "../../models/blogs"

import dbConnect from "../dbConnect"

dbConnect()

export function getAllEvents() {
  return events.find()
}

export function getEvent(slug) {
  return events.findOne({ slug })
}
