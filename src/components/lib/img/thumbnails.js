import React from 'react'
import { Row, Col } from 'react-bootstrap'
import IcImage from './image'

export default function IcThumbnails(props) {
  return (
    <Row className="edit-profile__thumbnails">
      {Array.from(Array(props.numbers || 8).keys()).map((i) => (
        <Col xs={6} md={3} lg={3} key={i}>
          <IcImage
            onDrop={props.onDrop}
            id={i + 1}
            onPreview={props.onPreview}
          />
        </Col>
      ))}
    </Row>
  )
}
