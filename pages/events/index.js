import Head from "next/head"
import React from "react"

import EventsGridComponent from "../../components/EventsGridComponent"

import { getAllEvents } from "../../lib/db/events"

function EventPage({ events }) {
  return (
    <div>
      <Head>
        <title>Events | Combits</title>
      </Head>
      <EventsGridComponent events={events} />
    </div>
  )
}

export async function getServerSideProps() {
  const events = JSON.parse(JSON.stringify(await getAllEvents()))
  return {
    props: {
      events,
    },
  }
}

export default EventPage
