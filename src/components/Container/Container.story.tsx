import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'react-native'
import { Container } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Container', () => (
    <StorybookContainer>
      <Container>
        <Text>{text('title', 'Hello world')}</Text>
      </Container>
    </StorybookContainer>
  ))
