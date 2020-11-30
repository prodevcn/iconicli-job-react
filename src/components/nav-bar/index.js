import React from 'react'
import SocialLinks from 'components/social-links'
import Logo from 'components/logo'

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <div className="nav-bar__wrapper">
        <Logo />
        {props.children}
        <SocialLinks />
      </div>
    </div>
  )
}
