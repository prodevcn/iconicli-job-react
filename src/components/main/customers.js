import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as Lighting } from 'assets/img/icons/lighting.svg'
import { ReactComponent as Tag } from 'assets/img/icons/tag.svg'
import { ReactComponent as BusinessMan } from 'assets/img/icons/business-man-throwing-papers.svg'
import { ReactComponent as Shield } from 'assets/img/icons/shield.svg'
import { ReactComponent as Ours } from 'assets/img/icons/24-hours.svg'
import { ReactComponent as Crown } from 'assets/img/icons/crown.svg'
import { ReactComponent as World } from 'assets/img/icons/world.svg'
import { ReactComponent as Muscle } from 'assets/img/icons/muscle.svg'
import { ReactComponent as Money } from 'assets/img/icons/money-bag-with-dollar-symbol.svg'
import { ReactComponent as Ascend } from 'assets/img/icons/ascend.svg'
import { ReactComponent as People } from 'assets/img/icons/people.svg'
import Gender from 'assets/img/gender.svg'
import Decent from 'assets/img/decent.svg'
import Reduced from 'assets/img/reduced.svg'

export default function OnboardingMainCustomers(props) {
  return (
    <div className="main-page__customers">
      <h2 className="center">
        For the <span className="sub-text">booker</span>
      </h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>From weeks to minutes!</dt>
            <dd className="custom-card__image">
              <Lighting />
            </dd>
            <dd>
              shorten the recruitment process and save time for the fun stuff.
              Easy to register and even easier to use!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Always free!</dt>
            <dd className="custom-card__image">
              <Tag />
            </dd>
            <dd>
              You only pay the model for their work. We don’t charge you for
              using the service.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>No more paperwork!</dt>
            <dd className="custom-card__image">
              <BusinessMan />
            </dd>
            <dd>
              Our system takes care of everything. GDPR, model release,
              contracts, you name it!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Your safety is our priority!</dt>
            <dd className="custom-card__image">
              <Shield className="svg-height-auto" />
            </dd>
            <dd>
              Recruit without hesitation thanks to our rating & feedback system,
              and our safe escrow payment method.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Always accessible!</dt>
            <dd className="custom-card__image">
              <Ours />
            </dd>
            <dd>
              Our digital solution gives you a 24 hour access to our users. No
              need to panik!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Diversity is our motto!</dt>
            <dd className="custom-card__image">
              <People className="svg-height-auto" />
            </dd>
            <dd>
              Iconicli welcomes all looks. This gives you a uniquely diverse
              database of icons to choose from.
            </dd>
          </dl>
        </Col>
      </Row>
      <h2 className="center">
        For the <span className="sub-text">model</span>
      </h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>find jobs worldwide</dt>
            <dd className="custom-card__image">
              <World className="svg-height-auto" />
            </dd>
            <dd>
              Find and apply to any job you want. No matter the location or
              industry. We do not restrict you in any way!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>you are more than enough</dt>
            <dd className="custom-card__image">
              <Crown className="svg-height-auto" />
            </dd>
            <dd>
              No matter your looks, you are always welcomed! Professionals,
              amateurs, new faces and first timers. All can use and benefit from
              Iconicli.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Be your own boss</dt>
            <dd className="custom-card__image">
              <Muscle />
            </dd>
            <dd>
              No one tells you how to look, dress, be or anything for that
              matter! You control and manage your own carrier, however you like!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Your safety is our priority!</dt>
            <dd className="custom-card__image">
              <Shield className="svg-height-auto" />
            </dd>
            <dd>
              Freelance without hesitation thanks to our rating & feedback
              system, and our safe escrow payment method.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Make money</dt>
            <dd className="custom-card__image">
              <Money />
            </dd>
            <dd>
              Keep the majority of your earnings for the work you do. Iconicli
              keeps only 20% of the payment in order to keep giving you more
              jobs and the best service on the planet!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>climb the carrier ladder</dt>
            <dd className="custom-card__image">
              <Ascend />
            </dd>
            <dd>
              YOU WANNA BE ON TOP? climb the industry ladder by taking on more
              jobs, perform well and increase your ratings and reputation to get
              the bigger jobs!
            </dd>
          </dl>
        </Col>
      </Row>
      <h2 className="center">
        For <span className="sub-text">Both</span>
      </h2>
      <Row>
        <Col>
          <dl className="custom-card">
            <dt>Be part of something bigger!</dt>
            <dd className="custom-card__image">
              <Ascend />
            </dd>
            <dd>
              By using and supporting Iconicli, your are automatically
              contributing and being part of a higher purpose! We strive to make
              a better world by supporting 3 of the 17 Global Goals for 2030.
            </dd>
          </dl>
        </Col>
      </Row>
      <Row className="for-all">
        <Col className="center">
          <img src={Gender} alt="" />
          <p>Gender Equality</p>
        </Col>
        <Col className="center">
          <img src={Decent} alt="" />
          <p>Decent work and economic growth</p>
        </Col>
        <Col className="center">
          <img src={Reduced} alt="" />
          <p>Reduced Inequalities</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="for-all__text">
            ’’In 2015, world leaders agreed to 17 goals for a better world by
            2030. These goals have the power to end poverty, fight inequality
            and address the urgency of climate change. Guided by the goals, it
            is now up to all of us, governments, businesses, civil society and
            the general public to work together to build a better future for
            everyone’’
          </p>
        </Col>
      </Row>
    </div>
  )
}
