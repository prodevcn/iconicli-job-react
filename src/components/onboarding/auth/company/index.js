import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { PreLoader } from 'components/utils'
import { onboardingCommonAction } from 'actions/onboarding'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'
import {
  OnboardingMember,
  OnboardingNeedHelp,
} from 'components/onboarding/utils'
import {
  lt,
  isDigit,
  isWebsiteValid,
  isEmailValid,
  isPassword,
  isConfirm,
} from 'utils/validator'
import { ROLE_COMPANY_USER, ENTITY_ALREADY_EXISTS } from 'const/requests'

export default function OnboardingModel(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [isPreloader, setIsPreloader] = useState(false)
  const [isUserExists, setIsUserExists] = useState(false)
  const [companyCompanyName, setCompanyName] = useState({
    valid: null,
    value: null,
  })
  const [companyCompanyNumber, setCompanyCompanyNumber] = useState({
    valid: null,
    value: null,
  })
  const [companyWebsite, setCompanyWebsite] = useState({
    valid: null,
    value: null,
  })
  const [email, setImail] = useState({ valid: null, value: null })
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ value: null })

  const { user } = useSelector((state) => state.onboarding)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // on success
    if (user && user.token && user.role && !disable) {
      setIsPreloader(false)
      setDisable(true)
      history.push('/onboarding/congratulation')
    }

    // if user with this email was registered
    if (
      user &&
      user.serviceErrorGroup &&
      user.serviceErrorGroup === ENTITY_ALREADY_EXISTS
    ) {
      setIsPreloader(false)
      setIsUserExists(true)
      setDisable(true)
    }
  }, [user, history, disable])

  const isValid = () => {
    if (
      companyCompanyName.value &&
      companyCompanyNumber.value &&
      companyWebsite.value &&
      email.value &&
      password.valid &&
      password.value === confirm.value
    ) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onboarding = () => {
    setIsPreloader(true)
    dispatch(
      onboardingCommonAction.request({
        companyCompanyName: companyCompanyName.value,
        companyCompanyNumber: companyCompanyNumber.value,
        companyWebsite: companyWebsite.value,
        email: email.value,
        password: password.valid,
        authority: ROLE_COMPANY_USER,
      }),
    )
  }

  return (
    <OnboardingContent>
      <OnboardingForm>
        {!isPreloader ? (
          <>
            <h2>{t('onboarding.title')}</h2>
            <Form onKeyUp={isValid}>
              <Form.Group onChange={(e) => lt(e, 2, setCompanyName)}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('onboarding.company.companyName')}
                />
                {companyCompanyName.valid === false && (
                  <div className="error">{t('error.len')} 2</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isDigit(e, setCompanyCompanyNumber)}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('onboarding.company.companyNumber')}
                />
                {companyCompanyNumber.valid === false && (
                  <div className="error">{t('error.digit')}</div>
                )}
              </Form.Group>
              <Form.Group
                onChange={(e) => isWebsiteValid(e, setCompanyWebsite)}
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('onboarding.company.website')}
                />
                {companyWebsite.valid === false && (
                  <div className="error">{t('error.website')}</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder={t('onboarding.model.email')}
                />
                {email.valid === false && (
                  <div className="error">{t('error.email')}</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isPassword(e, 6, setPassword)}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder={t('onboarding.model.password')}
                />
                {password.valid === false && (
                  <div className="error">{t('error.password')} 6</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isConfirm(e, setConfirm)}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder={t('onboarding.model.confirmPassword')}
                />
                {confirm.value && confirm.value !== password.value && (
                  <div className="error">{t('error.confirm')}</div>
                )}
              </Form.Group>
              {isUserExists && (
                <p className="center error">{t('onboarding.userExists')}</p>
              )}
              <Form.Group className={`${disable ? 'disabled' : ''}`}>
                <Button onClick={onboarding} variant="primary">
                  {t('onboarding.register')}
                </Button>
              </Form.Group>
              <Form.Group className="text-sm">
                <OnboardingMember />
              </Form.Group>
              <Form.Group className="text-sm">
                <OnboardingNeedHelp />
              </Form.Group>
            </Form>
          </>
        ) : (
          <PreLoader text={t('onboarding.registerModel')} />
        )}
      </OnboardingForm>
    </OnboardingContent>
  )
}
