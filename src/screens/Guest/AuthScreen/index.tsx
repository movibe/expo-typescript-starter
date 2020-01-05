import { AppPage } from 'components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Title } from 'react-native-paper'
import { useNavigation } from 'react-navigation-hooks'

interface IProps {}

export const AuthScreen: React.FC<IProps> = () => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	return (
		<AppPage title={t('hello_world')} padding>
			<Title>{t('hello_world')}</Title>
			<Button mode="contained" onPress={() => navigate('LoginScreen')}>
				{t('form.login')}
			</Button>
			<Button mode="contained" onPress={() => navigate('RegisterScreen')}>
				{t('form.register')}
			</Button>
		</AppPage>
	)
}
export default AuthScreen
