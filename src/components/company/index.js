import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IcHamburgerMenu from 'components/lib/hamburger'
import NavBar from 'components/nav-bar'
import Menu from 'components/menu'

export default function CompanyDashboard(props) {
  return (
    <Container fluid className="dashboard__company">
      <Row>
        <NavBar>
          <IcHamburgerMenu>
            <ul className="nav-bar__list">
              <li>
                <Link to="">Item 1</Link>
              </li>
              <li className="nav-bar__active">
                <Link to="">Item 1</Link>
                <Badge variant="light">5</Badge>
              </li>
              <li>
                <Link to="">Item 1</Link>
              </li>
              <li>
                <Link to="">Item 1</Link>
              </li>
              <li>
                <Link to="">Item 1</Link>
              </li>
            </ul>
          </IcHamburgerMenu>
        </NavBar>
        <Col>
          <Menu />
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
