import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-native-paper'
import { AppPage } from 'components';
import { AppThemeChange } from 'store/app/actions';
import { darkTheme, lightTheme } from 'theme';

type Props = {}

export const AppConfig : React.FC<Props> = ({}: Props):JSX.Element => {
  const dispatch = useDispatch()

  return (
    <AppPage>
      <Button mode="contained" onPress={() => dispatch(AppThemeChange(darkTheme))}>
       Dark
      </Button>
      <Button mode="contained" onPress={() => dispatch(AppThemeChange(lightTheme))}>
       Light
      </Button>

    </AppPage>
    )
}
