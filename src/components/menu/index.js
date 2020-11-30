import React from 'react'
import { InputGroup, FormControl, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logout from 'components/onboarding/logout'

export default function Menu(props) {
  return (
    <div className="menu-wrapper">
      <Navbar className="menu" expand="lg" variant="light" bg="primary">
        <Navbar.Brand href="/faq">Faq</Navbar.Brand>
        <Navbar.Brand href="/contacts">Contact</Navbar.Brand>
        <Navbar.Brand>
          <Logout />
        </Navbar.Brand>
      </Navbar>

      <InputGroup className="mb-3">
        <FormControl placeholder="search" />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={'search'} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
