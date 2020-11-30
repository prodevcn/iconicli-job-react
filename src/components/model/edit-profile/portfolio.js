import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfilePortfolio(props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Container>
      <Row className="portfolio">
        <Col sm={12} md={12} lg={9}>
          <Row className="edit-profile__thumbnails">
            {Array.from(Array(8).keys()).map((i) => (
              <Col xs={6} md={3} lg={3} key={i}>
                <IcImage
                  id={i + 1}
                  drop={true}
                  onDrop={onDrop}
                  dragOnImage={true}
                  onPreview={onPreview}
                >
                  <div className="thumbnails-text">
                    {t('profile.popup.portfolio.message1')}
                  </div>
                </IcImage>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
