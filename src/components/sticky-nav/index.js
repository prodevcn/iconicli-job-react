import React, { useEffect, useState } from 'react'

function ScrollPosition(delta, callback) {
  if (document.documentElement.scrollTop > window.innerHeight - delta) {
    callback(true)
  } else {
    callback(false)
  }
}

export default function StickyNav(props) {
  const [show, setShow] = useState(false)
  const delta = 150

  useEffect(() => {
    window.addEventListener('scroll', () => ScrollPosition(delta, setShow))
    return window.removeEventListener('scroll', () =>
      ScrollPosition(delta, setShow),
    )
  }, [])
  return (
    <nav className={`sticky-nav ${show ? 'sticky-nav__show' : ''}`}>
      {props.children}
    </nav>
  )
}
