import React from 'react'
import { AppPage } from 'components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from 'react-navigation-hooks'
import { Text } from 'react-native-paper'

interface IProps {}

export const TermScreen: React.FC<IProps> = () => {
  const { t } = useTranslation()
  const { goBack } = useNavigation()
  return (
    <AppPage title={t('hello_world')} padding onBack={() => goBack()}>
      <Text>Teste</Text>
    </AppPage>
  )
}
export default TermScreen
