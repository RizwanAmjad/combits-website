import NextProgress from "next-progress"

import NavComponent from "../components/NavComponent"

import "../styles/globals.css"
import "normalize.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavComponent />
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
