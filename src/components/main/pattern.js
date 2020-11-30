import React, { useEffect, useRef } from 'react'

function getWidth() {
  return (document.documentElement.scrollWidth / 100) * 12.5
}

function getHeight() {
  return document.documentElement.scrollHeight
}

function getViePortHeight() {
  return window.innerHeight
}

function draw(params) {
  const { context, delta, p1, p2, color } = params

  context.fillStyle = color

  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(getWidth() - delta, 0)
  context.lineTo(getWidth() - getWidth() / p1, getViePortHeight())
  context.lineTo(getWidth() - getWidth() / p2, getHeight())
  context.lineTo(0, getHeight())

  context.closePath()
  context.fill()
}

function initCanvas(params) {
  const { context } = params

  context.canvas.height = getHeight()
  context.canvas.width = getWidth()

  window.addEventListener('resize', () => {
    context.canvas.height = getHeight()
    context.canvas.width = getWidth()
    draw(params)
  })

  draw(params)
}

export default function OnboardingMainPattern(props) {
  const shape1 = useRef(null)
  const shape2 = useRef(null)

  useEffect(() => {
    const canvas1 = shape1.current.getContext('2d').canvas
    const ctx1 = canvas1.getContext('2d')
    initCanvas({ context: ctx1, delta: 0, p1: 10, p2: 3.5, color: '#ff929c' })

    const canvas2 = shape2.current.getContext('2d').canvas
    const ctx2 = canvas2.getContext('2d')
    initCanvas({ context: ctx2, delta: 50, p1: 1.5, p2: 1.4, color: '#ff929c' })
  })

  useEffect(() => {
    return window.removeEventListener('resize', () => {})
  }, [])

  return (
    <div className="overflow-y-hidden">
      <canvas className="canvas canvas__opacity" ref={shape1} />
      <canvas className="canvas" ref={shape2} />
    </div>
  )
}
