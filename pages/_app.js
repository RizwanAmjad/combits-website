import NavComponent from "../components/NavComponent";

import "../styles/globals.css";
import "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
