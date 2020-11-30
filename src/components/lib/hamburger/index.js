import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function IcHamburgerMenu(props) {
  return (
    <Navbar className="ic-hamburger-menu" collapseOnSelect expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{props.children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
