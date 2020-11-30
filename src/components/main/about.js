import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactScroll from 'react-scroll'
import { REACT_APP_IMAGES_HOSTING } from 'const/api'

export default function OnboardingMainAbout(props) {
  return (
    <div className="main-page__about" id="about">
      <ReactScroll.Element name="about">
        <h2 className="center">
          About <span className="sub-text">us</span>
        </h2>
      </ReactScroll.Element>
      <Row>
        <Col sm={true} xs={12} className="main-page__about-text">
          <h3>
            Our <span className="sub-text">why</span>
          </h3>
          <p>
            In a time where society flourishes with equality, sustainability,
            acceptance, and diversity, there also exists a repelling, non-equal,
            non-sustainable, dividing, and devastating norm.
          </p>

          <p>
            A norm which curses society with a sense of insignificance,
            inadequacy, hopelessness, and alienation. It does not only created
            negative emotions but also leads to physical consequences and mental
            illnesses.
          </p>

          <p>
            This norm is so deeply rooted in our society that we are constantly
            suffering from it without even noticing. It surrounds us and haunts
            us on every screen, every street, every add, and wherever we may go.
          </p>
        </Col>
        <Col sm={true} xs={12} className="p-0 img-bg">
          <p className="img-bg__1">
            <span>
              <img
                src={`${REACT_APP_IMAGES_HOSTING}/andre-hunter-k_VgiuhGLeU-unsplash.jpg`}
                alt=""
              />
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        <Col sm={true} xs={12} className="p-0 img-bg">
          <p className="img-bg__2">
            <span>
              <img
                src={`${REACT_APP_IMAGES_HOSTING}/frank-busch-4BRyWy_6yME-unsplash.jpg`}
                alt=""
              />
            </span>
          </p>
        </Col>
        <Col sm={true} xs={12} className="main-page__about-text">
          <h3>
            Our <span className="sub-text">mission</span>
          </h3>
          <p>
            We want to break the norm in the modelling industry, because we
            believe that everybody is an icon and that everybody has something
            unique to offer.
          </p>
          <p>It’s time for a major change!</p>
        </Col>
      </Row>

      <Row>
        <Col sm={7} xs={12}>
          <h3>
            Our <span className="sub-text">vision</span>
          </h3>
          <p>
            Our vision is to democratise the modelling industry, and thereby
            make the world a more accepting place by increasing the diversity in
            media.
          </p>

          <p>
            If what you see and live with everyday is a norm, then making media
            more diverse, results in diversity being the new norm.
          </p>

          <p>Try repeating that as fast as you can!</p>
        </Col>
        <Col sm={5} className="p-0 img-bg">
          <p className="img-bg__3">
            <span>
              <img
                src={`${REACT_APP_IMAGES_HOSTING}/agung-raharja-3oBOVtkFTWQ-unsplash.jpg`}
                alt=""
              />
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={5} className="p-0 img-bg">
          <p className="img-bg__4">
            <span>
              <img
                src={`${REACT_APP_IMAGES_HOSTING}/fabio-lucas-1Z1wTrhH1Ck-unsplash.jpg`}
                alt=""
              />
            </span>
          </p>
        </Col>
        <Col sm={7} xs={12}>
          <h3>
            Our <span className="sub-text">solution</span>
          </h3>
          <p>
            We chose to create Iconicli! A digital marketplace which allows
            anybody to register, work and market themselves as a model, no
            discrimination, no restrictions and without unnecessary pressure!
          </p>

          <p>
            It is an effective, secure and fun digital meeting place between
            models and companies in need of such services.
          </p>
        </Col>
      </Row>
    </div>
  )
}
