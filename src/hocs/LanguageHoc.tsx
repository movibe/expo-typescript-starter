import i18n from 'i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from 'store/types'

export const LanguageHoc: React.FC = ({ children }) => {
	const language = useSelector((state: IAppState) => state.app.language)

	React.useEffect(
		() => {
			i18n.changeLanguage(language)
		},
		[ language ],
	)

	return children
}
