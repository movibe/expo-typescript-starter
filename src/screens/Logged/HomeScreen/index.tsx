import React from 'react'
import { Text, Title } from 'react-native-paper'
import { AppPage } from 'components'
interface IProps {}

export const HomeScreen: React.FC<IProps> = () => {
  return (
    <AppPage title="Welcome">
      <Title>Welcome</Title>
      <Text>Hello World</Text>
    </AppPage>
  )
}
export default HomeScreen
