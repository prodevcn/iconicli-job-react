import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Tab, Tabs } from 'react-bootstrap'
import IcModal from 'components/lib/modal'
import ModelEditProfileBooking from 'components/model/edit-profile/booking'
import ModelEditProfilePortfolio from 'components/model/edit-profile/portfolio'
import ModelEditProfileProfile from 'components/model/edit-profile/profile'
import { modelImageUpload, modelBookingUpdate } from 'actions/model'

export default function ModelEditProfilePopup(props) {
  const { t } = useTranslation()

  const { updateImage } = useSelector((state) => state.modelImageUpload)
  const { bookingInfo } = useSelector((state) => state.modelBooking)
  const dispatch = useDispatch()

  const onSave = () => {
    dispatch(modelImageUpload.request(updateImage))
    dispatch(modelBookingUpdate.request(bookingInfo))
  }

  return (
    <IcModal onSave={onSave} icon="cog" btnText={t('profile.button')}>
      <>
        <Tabs
          className="popup-tabs"
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="1" title={t('profile.popup.tabs.btn1')}>
            <ModelEditProfileBooking />
          </Tab>
          <Tab eventKey="2" title={t('profile.popup.tabs.btn2')}>
            <ModelEditProfilePortfolio />
          </Tab>
          <Tab eventKey="3" title={t('profile.popup.tabs.btn3')}>
            <ModelEditProfileProfile />
          </Tab>
        </Tabs>
      </>
    </IcModal>
  )
}
