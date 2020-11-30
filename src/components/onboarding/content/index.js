import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import OnboardingNavbar from 'components/onboarding/navbar'
import OnboardingCarousel from 'components/onboarding/carousel'
import DoubleText from 'components/double-text'

export default function OnboardingContent(props) {
  const { t } = useTranslation()
  const [sidebar, setSitebar] = useState(5)
  const [content, setContent] = useState(7)
  const isMain = props.className === 'main-page'

  useEffect(() => {
    if (isMain) {
      setSitebar(4)
      setContent(8)
    }
  }, [isMain])

  return (
    <div className={`onboarding-content ${props.className}`}>
      <OnboardingNavbar isMain={isMain} />
      <Row className="p-0 m-0 overflow-x-hidden">
        <Col xs={12} lg={sidebar} className="content-row p-0">
          {props.children}
        </Col>
        <Col xs={12} lg={content} className="carousel-row p-0">
          {isMain && (
            <h1 className="main-title">
              <DoubleText text={t('onboarding.main')} />
            </h1>
          )}
          <OnboardingCarousel />
        </Col>
      </Row>
    </div>
  )
}
