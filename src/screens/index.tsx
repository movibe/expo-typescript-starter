import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { lightTheme, darkTheme } from 'theme';
import { IAppState } from 'store/types';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { AppThemeChange } from 'store/app/actions';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
import Routes from './Routes';

const Screens: React.FC = () => {
	const colorScheme = useColorScheme();
	const dispatch = useDispatch();
	const language = useSelector((state: IAppState) => state.app.language);
	const nav = useSelector((state: IAppState) => state.nav);
	const { t } = useTranslation();
	const isDark = useSelector((state: IAppState) => state.app.theme);

	const changeTheme = (colorScheme) => {
		dispatch(AppThemeChange(colorScheme === 'dark' ? darkTheme : lightTheme));
	};

	React.useEffect(() => {
		const themeSubscription = Appearance.addChangeListener(({ colorScheme }) => changeTheme(colorScheme));
		changeTheme(colorScheme);
		return () => {
			themeSubscription.remove();
		};
	});

	React.useEffect(
		() => {
			i18n.changeLanguage(language);
		},
		[ language ]
	);

	React.useEffect(
		() => {
			BackHandler.addEventListener('hardwareBackPress', onBackPress);
			return () => {
				BackHandler.removeEventListener('hardwareBackPress', onBackPress);
			};
		},
		[ language ]
	);

	const onBackPress = () => {
		if (nav.index === 0) {
			Alert.alert(
				t('closeApp.title'),
				t('closeApp.message'),
				[
					{
						onPress: () => BackHandler.exitApp(),
						text: t('yes')
					},
					{
						style: 'cancel',
						text: t('cancel')
					}
				],
				{ cancelable: false }
			);
		}
		return true;
	};

	const _theme = isDark.dark ? darkTheme : lightTheme;

	return (
		<AppearanceProvider>
			<PaperProvider theme={_theme}>
				<ThemeProvider theme={_theme.colors}>
					<Routes />
				</ThemeProvider>
			</PaperProvider>
		</AppearanceProvider>
	);
};

export default Screens;
