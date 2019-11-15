import { configure, addDecorator, addParameters } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { withI18next } from 'storybook-addon-i18next'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import i18n from 'i18next'
import '../src/locales'
import { lightTheme } from '../src/theme'
const App = require('../app.json')

setOptions({
	name: App.name,
	goFullScreen: false,
	addonPanelInRight: false,
	showSearchBox: false,
	showAddonPanel: true,
	showStoriesPanel: true
})

addParameters({
	viewport: {
		defaultViewport: 'iphone6'
	}
})

addDecorator(
	withI18next({
		i18n,
		languages: {
			en: 'English',
			pt: 'Português'
		}
	})
)

// addDecorator(withThemesProvider([lightTheme]))
addDecorator(withKnobs({ escapeHTML: false }))

const loadStories = () => {
	const req = require.context('../src', true, /\.story\.tsx?$/)
	req.keys().forEach(story => req(story))
}

configure(loadStories, module)
