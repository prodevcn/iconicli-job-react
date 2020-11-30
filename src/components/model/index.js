import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import IcHamburgerMenu from 'components/lib/hamburger'
import NavBar from 'components/nav-bar'
import Menu from 'components/menu'

export default function ModelDashboard(props) {
  const { t } = useTranslation()

  return (
    <Container fluid className="dashboard__model">
      <Row>
        <NavBar>
          <IcHamburgerMenu>
            <ul className="nav-bar__list">
              <li>
                <NavLink to="/dashboard/model/profile">
                  {t('dashboard.navbar.myProfile')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/model/jobs">
                  {t('dashboard.navbar.jobs')}
                  <Badge variant="light">2</Badge>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/model/messages">
                  {t('dashboard.navbar.messages')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/model/settings">
                  {t('dashboard.navbar.settings')}
                </NavLink>
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
