import React from 'react'

export default function DoubleText(props) {
  return (
    <span className="double-text">
      <span className="double-text__main">{props.text}</span>
      <span className="double-text__shadow">{props.text}</span>
    </span>
  )
}
