import Event from "../../models/events"

import dbConnect from "../dbConnect"

dbConnect()

export function getAllEvents() {
  return Event.find()
}

export function getEvent(slug) {
  return Event.findOne({ slug })
}
