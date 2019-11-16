import { configure, addDecorator, addParameters } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { withI18next } from 'storybook-addon-i18next';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import i18n from 'i18next';
import '../src/locales';
const App = require('../app.json');

const loadStories = () => {
	const req = require.context('../src', true, /\.story\.tsx?$/);
	req.keys().forEach((story) => req(story));
};

setOptions({
	name: App.name,
	goFullScreen: false,
	addonPanelInRight: false,
	showSearchBox: false,
	showAddonPanel: true,
	showStoriesPanel: true
});

// addDecorator(withScreenshot);
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'iphone5'
	},
	options: {
		addonPanelInRight: true
	}
});

addDecorator(
	withI18next({
		i18n,
		languages: {
			en: 'English',
			pt: 'Português'
		}
	})
);
addDecorator(withKnobs({ escapeHTML: false }));

configure(loadStories, module);
