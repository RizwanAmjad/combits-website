import React from "react"

import AwesomeSlider from "react-awesome-slider"

import styles from "./styles/slider.module.css"

import "react-awesome-slider/dist/styles.css"

function SliderComponent({ sliderImages }) {
  return (
    <AwesomeSlider className={styles.container}>
      {sliderImages &&
        sliderImages.map(({ _id, image }) => (
          <div data-src={image} key={_id} />
        ))}
    </AwesomeSlider>
  )
}

export default SliderComponent
