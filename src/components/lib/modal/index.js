import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IcModal(props) {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleSave = () => {
    props.onSave()
    handleClose()
  }

  return (
    <>
      <Button className="btn-icon" onClick={handleShow}>
        <FontAwesomeIcon icon={props.icon} />
        {props.btnText}
      </Button>

      <Modal
        className="ic-modal"
        dialogClassName="ic-modal__width"
        show={show}
        onHide={handleClose}
      >
        {props.children}

        <div className="ic-modal__footer">
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            save
          </Button>
        </div>
      </Modal>
    </>
  )
}
