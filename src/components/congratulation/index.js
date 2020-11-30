import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/logo'

export default function Congratulation(props) {
  return (
    <div className={`congratulation ${props.className}`}>
      <Link to="/">
        <Logo />
      </Link>
      <div className="container">{props.children}</div>
    </div>
  )
}
