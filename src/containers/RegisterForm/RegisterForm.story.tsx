import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { RegisterForm } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StorybookContainer, withRedux } from 'hocs'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AuthForm', () => (
    <StorybookContainer>
      <RegisterForm
        loading={boolean('loading', false)}
        onFacebook={action('onFacebook')}
        onSubmit={action('onSubmit')}
      />
    </StorybookContainer>
  ))
