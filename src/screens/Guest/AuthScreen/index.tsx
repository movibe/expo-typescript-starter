import { AppPage } from 'components'
import { LoginForm, RegisterForm } from 'containers'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import Swiper from 'react-native-web-swiper'
import styled from 'styled-components/native'
import { IStyled } from 'theme'

const Slide = styled(View)`
  flex: 1;
`

const Row = styled.View`flex-direction: row;`

interface IButtonBorder extends IStyled {
	active?: boolean
}

const ButtonBorder =styled(TouchableOpacity)<IButtonBorder>`
	flex: 1;
	margin-bottom: 5px;
	height: 30px;
	justify-content: center;
	align-items: center;
	border-bottom-width: ${(props)=> props.active ? '2px' : '0px'};;
	border-bottom-color: ${props=>props.theme.primary};
`
interface IProps {}

export const AuthScreen: React.FC<IProps> = () => {
	const { t } = useTranslation()
	const [ SlideIndex, setSlideIndex ] = useState(0)
	let swiperRef
	const setSlide = (value) => {
		if (swiperRef.state.activeIndex !== value) {
			swiperRef.goTo(value)
			setSlideIndex(value)
		}
	}
	return (
		<AppPage title={t('welcome.title')} padding>
			<Row>
				<ButtonBorder active={SlideIndex === 0}
				disabled={SlideIndex ===0}
				onPress={() => setSlide(0)}>
					<Text>
						{t('login.title')} 
					</Text>
				</ButtonBorder>
				<ButtonBorder active={SlideIndex === 1}
				disabled={SlideIndex==1}
				 onPress={() => setSlide(1)}>
					<Text>{t('register.title')}</Text>
				</ButtonBorder>
			</Row>
			<Swiper
				ref={(ref) => (swiperRef = ref)}
				from={SlideIndex}
				onIndexChanged={setSlideIndex}
				controlsProps={{
					dotsTouchable: true,
					dotsPos: false,
					prevPos: false,
					nextPos: false,
				}}
			>
				<Slide>
					<LoginForm onSubmit={console.log} />
				</Slide>
				<Slide>
					<RegisterForm onSubmit={console.log} />
				</Slide>
			</Swiper>
		</AppPage>
	)
}
export default AuthScreen
