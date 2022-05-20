import Head from "next/head"
import React from "react"

import EventDetailComponent from "../../components/EventDetailComponent"

import { getEvent } from "../../lib/db/events"

function EventDetailsPage({ event }) {
  return (
    <>
      <Head>
        <title>{event.title} | Details</title>
      </Head>
      <EventDetailComponent event={event} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  let event = await getEvent(params.slug)
  event.content = await fetch(event.content).then((response) => response.text())
  event = JSON.parse(JSON.stringify(event))

  return {
    props: { event },
  }
}

export default EventDetailsPage
