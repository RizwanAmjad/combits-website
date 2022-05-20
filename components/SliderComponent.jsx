import React from "react"

import AwesomeSlider from "react-awesome-slider"

import styles from "./styles/slider.module.css"
import "react-awesome-slider/dist/styles.css"

function SliderComponent(props) {
  return (
    <AwesomeSlider className={styles.container}>
      <div style={{ color: "white" }}>One</div>
      <div style={{ color: "white" }}>Two</div>
      <div style={{ color: "white" }}>Three</div>
      <div style={{ color: "white" }}>Four</div>
    </AwesomeSlider>
  )
}

export default SliderComponent
