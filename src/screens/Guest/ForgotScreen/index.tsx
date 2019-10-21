import React from 'react'
import { AppPage } from 'components'
import { useNavigation } from 'react-navigation-hooks'
import { ForgotForm } from 'containers'
import { useTranslation } from 'react-i18next'
import * as firebase from 'firebase'
import { useState } from 'react'
import { Snackbar } from 'react-native-paper'

interface IProps {}

export const ForgotScreen: React.FC<IProps> = () => {
  const [Loading, setLoading] = useState(false)
  const [ErrorSnack, setErrorSnack] = useState({
    visible: false,
    text: ''
  })
  const { goBack } = useNavigation()
  const { t } = useTranslation()
  const onSubmit = async form => {
    setLoading(true)
    try {
      await firebase.auth().sendPasswordResetEmail(form.email)
      goBack()
    } catch (error) {
      if (error && error.message) {
        setErrorSnack({
          visible: true,
          text: error.message
        })
      } else {
        setErrorSnack({
          visible: true,
          text: 'Error reseting password. Please try again or contact us.'
        })
      }
    }
    setLoading(false)
  }

  return (
    <AppPage title={t('forgot.title')} padding onBack={() => goBack()}>
      <ForgotForm loading={Loading} onSubmit={onSubmit} />
      <Snackbar
        visible={ErrorSnack.visible}
        onDismiss={() => setErrorSnack({ visible: false, text: '' })}
      >
        {ErrorSnack.text}
      </Snackbar>
    </AppPage>
  )
}
export default ForgotScreen
