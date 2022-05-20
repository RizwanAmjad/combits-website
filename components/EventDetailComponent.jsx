import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import EventHeaderComponent from "./EventHeaderComponent"

import styles from "./styles/event-detail.module.css"

function EventDetailComponent({ event }) {
  return (
    <article className={styles.container}>
      <EventHeaderComponent title={event.title} image={event.image} />
      <ReactMarkdown>{event.content}</ReactMarkdown>
    </article>
  )
}

export default EventDetailComponent
