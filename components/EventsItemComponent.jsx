import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "./styles/events-item.module.css"

function EventsItemComponent({ title, description, image, slug }) {
  return (
    <Link href={`/events/${slug}`}>
      <a>
        <div className={styles.blogItem}>
          <div className={styles.image}>
            <img
              src={`/api/events-images/${slug}/${image}`}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default EventsItemComponent
