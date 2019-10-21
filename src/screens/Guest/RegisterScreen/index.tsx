import React from 'react'
import { AppPage } from 'components'
import { useNavigation } from 'react-navigation-hooks'
import { RegisterForm } from 'containers'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { firebaseUrl } from 'config'
import { useState } from 'react'
import { firebase } from 'server'
import { Snackbar } from 'react-native-paper'

interface IProps {}

export const RegisterScreen: React.FC<IProps> = () => {
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
      const newUser = await axios.post(firebaseUrl, form)
      if (newUser.data && newUser.data.error) {
        console.log('erro', newUser)
        setErrorSnack({
          visible: true,
          text: 'Erro na criação da conta'
        })
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(form.email, form.password)
      }
      setLoading(false)
    } catch (e) {
      console.log('Erro na criação da conta', e)
      setErrorSnack({
        visible: true,
        text: 'Erro na criação da conta'
      })
      setLoading(false)
    }
  }
  return (
    <AppPage title={t('register.title')} padding onBack={() => goBack()}>
      <RegisterForm loading={Loading} onSubmit={onSubmit} />
      <Snackbar
        visible={ErrorSnack.visible}
        onDismiss={() => setErrorSnack({ visible: false, text: '' })}
        action={{
          label: t('close'),
          onPress: () => {
            // Do something
          }
        }}
      >
        {ErrorSnack.text}
      </Snackbar>
    </AppPage>
  )
}
export default RegisterScreen
