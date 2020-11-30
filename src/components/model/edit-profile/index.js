import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { modelImageUpload } from 'actions/model'
import ModelDashboard from 'components/model'
import IcImage from 'components/lib/img'
import IcImageGallery from 'components/lib/gallery'
import IcStars from 'components/lib/stars'
import ModelEditProfilePopup from 'components/model/edit-profile/popup'

export default function ModelEditProfile(props) {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const [images, setImages] = useState(null)
  const [bookings, setBookings] = useState(null)
  const [toggle, setToggle] = useState(false)

  const { uploadImage } = useSelector((state) => state.modelImageUpload)
  const { booking } = useSelector((state) => state.modelBooking)
  const dispatch = useDispatch()

  useEffect(() => {
    if (uploadImage) {
      const result = Object.keys(uploadImage).map((id) => {
        const url = URL.createObjectURL(uploadImage[id])
        return {
          original: url,
          thumbnail: url,
        }
      })
      setImages(result)
    }
  }, [uploadImage])

  useEffect(() => {
    if (booking) {
      const result = Object.keys(booking)
        .filter((item) => booking[item])
        .map((item) => {
          return { key: item, value: booking[item] }
        })
      setBookings(result)
    }
  }, [booking])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onPreview = () => setShow(true)
  const onDrop = (data) => dispatch(modelImageUpload.request(data))

  return (
    <ModelDashboard className="edit-profile">
      <Container>
        <Row>
          <Col className="edit-profile__button">
            <ModelEditProfilePopup />
            <IcImageGallery
              show={show}
              images={images}
              handleClose={handleClose}
              handleShow={handleShow}
            >
              <span className="ic-gallery__tab">Portfolio</span>
            </IcImageGallery>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={8}>
            <Row className="p-0">
              <Col sm={12} md={12} lg={5} className="edit-profile__image">
                <IcImage
                  drop={false}
                  onDrop={onDrop}
                  id="main"
                  onPreview={onPreview}
                />
              </Col>
              <Col sm={12} md={12} lg={7}>
                {bookings &&
                  bookings.length > 0 &&
                  bookings[0].key === 'name' && (
                    <h1 className="edit-profile__title">{bookings[0].value}</h1>
                  )}
                <Row className="edit-profile__thumbnails">
                  {Array.from(Array(8).keys()).map((i) => (
                    <Col xs={6} md={3} lg={3} key={i}>
                      <IcImage
                        drop={false}
                        onDrop={onDrop}
                        id={i + 1}
                        onPreview={onPreview}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4} className="edit-profile__bookins-list">
            {bookings && <IcStars stars={3} />}
            <ul
              className={`edit-profile__bookings ${
                toggle ? 'edit-profile__bookings-more' : ''
              }`}
            >
              {bookings &&
                bookings.map((item, i) => {
                  if (item.key === 'name') {
                    return false
                  }
                  if (Array.isArray(item.value)) {
                    if (!item.value.length) {
                      return false
                    }
                    return (
                      <li key={i}>
                        <b>{item.key}: </b>{' '}
                        <ul>
                          {item.value.map((li, k) => (
                            <li className="tag" key={k}>
                              {li}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  }
                  return (
                    <li key={i}>
                      <b>{item.key}: </b>{' '}
                      {item.key === 'date' && item.value
                        ? new Date(item.value).toUTCString()
                        : item.value}
                    </li>
                  )
                })}
            </ul>
            {bookings && bookings.length >= 5 && (
              <div
                className="show-more__btn"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? t('profile.less') : t('profile.more')}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </ModelDashboard>
  )
}
