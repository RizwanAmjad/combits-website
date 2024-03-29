import Link from "next/link"
import React from "react"

import styles from "./styles/nav.module.css"

function NavComponent(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <div>
            <img src={"/site/combits-logo.png"} className={styles.logo} />
          </div>
        </a>
      </Link>
      <div className={styles.navItems}>
        <div className={styles.navItem}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/events">Events</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavComponent
