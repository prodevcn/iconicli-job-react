import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IcStars(props) {
  const { stars } = props

  return (
    <div className="stars">
      <FontAwesomeIcon
        icon="star"
        className={`${stars >= 1 ? 'stars__active' : ''}`}
      />
      <FontAwesomeIcon
        icon="star"
        className={`${stars >= 2 ? 'stars__active' : ''}`}
      />
      <FontAwesomeIcon
        icon="star"
        className={`${stars >= 3 ? 'stars__active' : ''}`}
      />
      <FontAwesomeIcon
        icon="star"
        className={`${stars >= 4 ? 'stars__active' : ''}`}
      />
      <FontAwesomeIcon
        icon="star"
        className={`${stars >= 5 ? 'stars__active' : ''}`}
      />
    </div>
  )
}
