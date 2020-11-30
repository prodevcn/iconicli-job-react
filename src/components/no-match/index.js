import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NoMatch(props) {
  let location = useLocation()

  return (
    <div className="no-match">
      <h2>
        <Link to="/">Home page</Link>
      </h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
