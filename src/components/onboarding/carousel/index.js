import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { REACT_APP_IMAGES_HOSTING } from 'const/api'

const properties = {
  controls: false,
  indicators: false,
  interval: 5000,
}

function CarouselItemImage({ src }) {
  return (
    <div
      className="onboarding-content__image"
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}

export default function OnboardingCarousel(props) {
  const imgLen = 7

  useEffect(() => {
    Array.from(Array(imgLen).keys()).forEach((i) => {
      const img = new Image()
      img.src = `${REACT_APP_IMAGES_HOSTING}/img-${i}.jpg`
    })
  }, [])

  return (
    <div className="onboarding-content__carousel">
      <Carousel className="carousel-fade" {...properties}>
        {Array.from(Array(imgLen).keys()).map((i) => (
          <Carousel.Item key={`carousel-img-${i}`}>
            <CarouselItemImage
              className="carousel__item-1"
              src={`${REACT_APP_IMAGES_HOSTING}/img-${i}.jpg`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
