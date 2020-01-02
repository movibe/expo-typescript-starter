import i18n from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, BackHandler } from 'react-native'
import { useSelector } from 'react-redux'
import { IAppState } from 'store/types'

import { ThemeHoc } from '../hocs/ThemeHoc'
import Routes from './Routes'

const Screens: React.FC = () => {
	const language = useSelector((state: IAppState) => state.app.language)
	const nav = useSelector((state: IAppState) => state.nav)
	const { t } = useTranslation()

	React.useEffect(
		() => {
			i18n.changeLanguage(language)
		},
		[ language ],
	)

	React.useEffect(
		() => {
			BackHandler.addEventListener('hardwareBackPress', onBackPress)
			return () => {
				BackHandler.removeEventListener('hardwareBackPress', onBackPress)
			}
		},
		[ language ],
	)

	const onBackPress = () => {
		if (nav.index === 0) {
			Alert.alert(
				t('closeApp.title'),
				t('closeApp.message'),
				[
					{
						onPress: () => BackHandler.exitApp(),
						text: t('yes'),
					},
					{
						style: 'cancel',
						text: t('cancel'),
					},
				],
				{ cancelable: false },
			)
		}
		return true
	}

	return (
		<ThemeHoc>
			<Routes />
		</ThemeHoc>
	)
}

export default Screens
