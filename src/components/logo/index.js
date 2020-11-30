import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Logo(props) {
  const { t } = useTranslation()

  return (
    <div className="logo">
      <h2>
        Iconic<span className="sub-text">li</span>
      </h2>
      <p className="logo__slogan">
        {t('onboarding.slogan.first')}
        <span className="sub-text"> {t('onboarding.slogan.second')}</span>
      </p>
    </div>
  )
}
