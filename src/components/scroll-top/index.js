import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function getScrollPosition() {
  return document.documentElement.scrollTop
}

function getViePortHeight() {
  return window.innerHeight
}

function onScroll(delta, setScrollTop) {
  if (getScrollPosition() + delta > getViePortHeight()) {
    setScrollTop(true)
  } else {
    setScrollTop(false)
  }
}

export default function ScrollTop(props) {
  const delta = 65
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => onScroll(delta, setScrollTop))
    return () =>
      document.removeEventListener('scroll', () =>
        onScroll(delta, setScrollTop),
      )
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500 })
  }

  return (
    <div className="scroll-top" onClick={scrollToTop}>
      {scrollTop && <FontAwesomeIcon icon={'caret-up'} />}
    </div>
  )
}
