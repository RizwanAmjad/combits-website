import React from "react"

import EventsGridComponent from "../../components/EventsGridComponent"

const events = [
  {
    description: "Description",
    title: "Speed Prgramming",
    slug: "speed-programming",
  },
  {
    description: "Description",
    title: "Speed Prgramming",
    slug: "speed-programming",
  },
  {
    description: "Description",
    title: "Speed Prgramming",
    slug: "speed-programming",
  },
  {
    description: "Description",
    title: "Speed Prgramming",
    slug: "speed-programming",
  },
  {
    description: "Description",
    title: "Speed Prgramming",
    slug: "speed-programming",
  },
]

function EventPage(props) {
  return (
    <div>
      <EventsGridComponent events={events} />
    </div>
  )
}

export default EventPage
