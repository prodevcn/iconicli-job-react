import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfileProfile(props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Container>
      <Row className="profile">
        <Col className="edit-profile__image">
          <IcImage
            id="main"
            drop={true}
            onDrop={onDrop}
            dragOnImage={true}
            onPreview={onPreview}
          >
            <div className="thumbnails-text">
              {t('profile.popup.profile.message1')}
            </div>
          </IcImage>
        </Col>
      </Row>
    </Container>
  )
}
