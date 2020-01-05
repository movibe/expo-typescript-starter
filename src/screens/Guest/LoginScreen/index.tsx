import { AppPage } from 'components'
import { AuthForm } from 'containers'
import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Snackbar, Text } from 'react-native-paper'
import { useNavigation } from 'react-navigation-hooks'
import { firebase } from 'server'

interface IProps {}

export const LoginScreen: React.FC<IProps> = () => {
	const [ Loading, setLoading ] = useState(false)
	const [ ErrorSnack, setErrorSnack ] = useState({
		visible: false,
		text: '',
	})
	const { goBack, navigate } = useNavigation()
	const { t } = useTranslation()

	const onSubmit = async (form) => {
		setLoading(true)
		try {
			const user = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
			console.log(user)

			setLoading(false)
		} catch (e) {
			console.log('Erro na criação da conta', e)
			setErrorSnack({
				visible: true,
				text: 'Erro na criação da conta',
			})
			setLoading(false)
		}
	}
	return (
		<AppPage title={t('login.title')} padding onBack={() => goBack()}>
			<AuthForm loading={Loading} onForgot={() => navigate('ForgotScreen')} onSubmit={onSubmit} />
			<Button onPress={() => navigate('TermScreen')}>
				<Text>Terms</Text>
			</Button>
			<Snackbar visible={ErrorSnack.visible} onDismiss={() => setErrorSnack({ visible: false, text: '' })}>
				{ErrorSnack.text}
			</Snackbar>
		</AppPage>
	)
}
export default LoginScreen
