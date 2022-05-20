import React from "react"

import EventsItemComponent from "./EventsItemComponent"

import styles from "./styles/events-grid.module.css"

function EventsGridComponent({ events }) {
  return (
    <div className={styles.blogGrid}>
      {events.map((event) => (
        <EventsItemComponent
          key={event._id}
          description={event.description}
          image={`${event.image}`}
          slug={event.slug}
          title={event.title}
        />
      ))}
    </div>
  )
}

export default EventsGridComponent
